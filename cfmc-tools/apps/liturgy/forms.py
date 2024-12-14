from django import forms
from django.utils import timezone
from .models import LiturgyEntry

class LiturgyUploadForm(forms.ModelForm):
    class Meta:
        model = LiturgyEntry
        fields = ['service_date', 'service_number', 'liturgy_text']
        
    def clean_service_date(self):
        service_date = self.cleaned_data['service_date']
        
        # Edge cases if somehow theres no service date
        if not service_date:
            raise forms.ValidationError("Service date is required")
        
        # Edge cases if the service date is in the past
        if service_date < timezone.now().date():
            raise forms.ValidationError("Service date cannot be in the past")
        
        return service_date
        
    def clean_service_number(self):
        service_number = self.cleaned_data['service_number']
        
        # Check if service number is present
        if not service_number:
            raise forms.ValidationError("Service number is required")
        
        # Ensure that service number is a positive integer
        try:
            service_number = int(service_number)
        except ValueError:
            raise forms.ValidationError("Service number must be a positive integer")
        
        # Edge if they somehow enter a number less than 1
        if service_number < 1:
            raise forms.ValidationError("Service number must be greater than 0")
        
        # Edge if they somehow enter a number greater than 10
        if service_number > 10:
            raise forms.ValidationError("Service number must be less than 10")
        
        return service_number
    
    def clean_liturgy_text(self):
        liturgy_text = self.cleaned_data['liturgy_text']
        
        # Check if liturgy text is present
        if not liturgy_text:
            raise forms.ValidationError("Liturgy text is required")
        
        return liturgy_text
