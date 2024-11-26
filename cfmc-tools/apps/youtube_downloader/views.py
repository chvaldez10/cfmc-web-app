from django.shortcuts import render, redirect
from django.contrib import messages
from django.db import transaction
from asgiref.sync import sync_to_async

from .models import DownloadRequest
from .forms import DownloadRequestForm
from .tasks import download_youtube_content

async def download_view(request):
    if request.method == 'POST':
        form = DownloadRequestForm(request.POST)
        
        if form.is_valid():
            url = form.cleaned_data['url']
            download_type = form.cleaned_data['download_type']
            
            # Use sync_to_async for creating the object
            create_download_request = sync_to_async(DownloadRequest.objects.create)
            download_request = await create_download_request(
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
            messages.error(request, 'Please enter a valid YouTube URL.')
    else:
        form = DownloadRequestForm()
    
    # Use sync_to_async for querying
    get_recent_downloads = sync_to_async(list)(
        DownloadRequest.objects.order_by('-created_at')[:10]
    )
    recent_downloads = await get_recent_downloads
    
    return render(request, 'youtube_downloader.html', {'form': form, 'recent_downloads': recent_downloads})