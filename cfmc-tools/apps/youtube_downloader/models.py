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
        ('completed', 'Completed'),
        ('failed', 'Failed')
    ])
