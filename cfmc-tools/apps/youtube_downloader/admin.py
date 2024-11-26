from django.contrib import admin
from .models import DownloadRequest

class DownloadRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'url', 'download_type', 'status')

admin.site.register(DownloadRequest, DownloadRequestAdmin)
