from django import forms

class DownloadRequestForm(forms.Form):
    # TODO: Refactor this to use a model form
    url = forms.URLField(
        label="YouTube URL",
        widget=forms.TextInput(attrs={'placeholder': 'Enter a YouTube URL'})
    )
    
    download_type = forms.ChoiceField(
        choices=[
            ('audio', 'Audio'),
            ('video', 'Video')
        ],
    )
