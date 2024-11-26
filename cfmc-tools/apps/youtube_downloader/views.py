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
        print(f"Form data: {request.POST}")
        print(f"Form data is valid: {form.is_valid()}")
        
        allow_downloads = False
        
        # validate form
        if form.is_valid() and allow_downloads:
            url = form.cleaned_data['url']
            download_type = form.cleaned_data['download_type']
            print(f"Download type: {download_type}")
            
            # Setup download directory
            download_request = DownloadRequest.objects.create(
                url=url,
                download_type=download_type,
                status='pending'
            )
            
            # Queue the download request
            download_youtube_content.delay(download_request.id)

            # Show success message
            messages.success(request, 'Download request submitted successfully!')
            return redirect('download')
        else:
            messages.error(request, 'Invalid form data. Please try again.')
    else:
        form = DownloadRequestForm()
    
    # Get recent downloads
    recent_downloads = DownloadRequest.objects.order_by('-created_at')[:10]
    
    return render(request, 'youtube_downloader.html', {'form': form, 'recent_downloads': recent_downloads})