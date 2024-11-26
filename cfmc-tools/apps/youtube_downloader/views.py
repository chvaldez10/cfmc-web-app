from django.shortcuts import render, redirect
from django.contrib import messages
from pathlib import Path
from youtube_downloader.utils.downloader import YouTubeDownloader

from .models import DownloadRequest
from .forms import DownloadRequestForm
from .tasks import download_youtube_content

async def download_view(request):
    if request.method == 'POST':
        form = DownloadRequestForm(request.POST)
        
        # validate form
        if form.is_valid():
            url = form.cleaned_data['url']
            download_type = form.cleaned_data['download_type']
            
            # Setup download directory
            
            download_request = DownloadRequest.objects.create(
                url=url,
                download_type=download_type,
                status='pending'
            )
            
            download_youtube_content.delay(download_request.id)
            messages.success(request, 'Download request submitted successfully!')
            return redirect('download')
    else:
        form = DownloadRequestForm()
    
    recent_downloads = DownloadRequest.objects.order_by('-created_at')[:10]
    
    return render(request, 'youtube_downloader.html', {'form': form, 'recent_downloads': recent_downloads})