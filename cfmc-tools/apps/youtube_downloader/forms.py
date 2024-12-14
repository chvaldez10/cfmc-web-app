from django import forms

class DownloadRequestForm(forms.Form):
    # TODO: Refactor this to use a model form
    youtube_url = forms.URLField(
        label="YouTube URL",
        widget=forms.TextInput(attrs={
            'placeholder': 'Paste YouTube video link',
            'id': 'youtube-url',
            'name': 'youtube_url'
        })
    )
    
    download_type = forms.ChoiceField(
        choices=[
            ('audio', 'Audio'),
            ('video', 'Video')
        ],
    )
