from pathlib import Path
from decouple import config
import logging

# django
from django.shortcuts import render, redirect
from django.views import View
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect

# apps
from .forms import LiturgyUploadForm
from .services.liturgy_service import LiturgyService
from .tasks import parse_liturgy

logger = logging.getLogger(__name__)

@method_decorator(csrf_protect, name='dispatch')
class LiturgyUploadView(View):
    template_name = 'liturgy_upload.html'
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.liturgy_service = LiturgyService()
    
    def get(self, request):
        """Handle GET request"""
        context = {
            'form': LiturgyUploadForm(),
            'recent_entries': self.liturgy_service.get_recent_entries()
        }
        return render(request, self.template_name, context)
    
    def post(self, request):
        """Handle POST request"""
        form = LiturgyUploadForm(request.POST)
        
        if form.is_valid():
            try:
                # Create entry
                entry = self.liturgy_service.create_liturgy_entry(form.cleaned_data)
                
                # Queue parsing task
                parse_liturgy.delay(entry.id)
                
                messages.success(request, 'Liturgy text submitted for parsing!')
                
                return redirect('liturgy_upload')
                
            except Exception as e:
                messages.error(request, f'Error submitting liturgy: {str(e)}')
        else:
            messages.error(request, 'Please correct the errors below.')
        
        # If we get here, there was an error
        context = {
            'form': form,
            'recent_entries': self.liturgy_service.get_recent_entries()
        }
        
        return render(request, self.template_name, context)