from django import forms
from .models import DownloadRequest

class DownloadRequestForm(forms.ModelForm):
    class Meta:
        model = DownloadRequest
        fields = ['youtube_url', 'download_type']
        
    def clean_youtube_url(self):
        youtube_url = self.cleaned_data['youtube_url']
        if not youtube_url:
            raise forms.ValidationError("YouTube URL is required")
        return youtube_url
    
    def clean_download_type(self):
        download_type = self.cleaned_data['download_type']
        if not download_type:
            raise forms.ValidationError("Download type is required")
        return download_type