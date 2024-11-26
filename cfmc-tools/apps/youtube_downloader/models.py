from django.db import models

class DownloadRequest(models.Model):
    url = models.URLField(max_length=2000)
    download_type = models.CharField(max_length=10, choices=[
        ('audio', 'Audio'),
        ('video', 'Video')
    ])
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('completed', 'Completed'),
        ('failed', 'Failed')
    ])
    file_path = models.CharField(max_length=500, blank=True, null=True)
    error_message = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.download_type.capitalize()} request for {self.url} - Status: {self.status}"

    class Meta:
        app_label = 'youtube_downloader'
