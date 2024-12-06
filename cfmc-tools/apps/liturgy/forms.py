from django import forms
from .models import LiturgyEntry

class LiturgyUploadForm(forms.ModelForm):
    class Meta:
        model = LiturgyEntry
        fields = ['service_date', 'service_number', 'liturgy_text']
        
    def clean_service_number(self):
        service_number = self.cleaned_data['service_number']
        if service_number < 1:
            raise forms.ValidationError("Service number must be greater than 0")
        return service_number