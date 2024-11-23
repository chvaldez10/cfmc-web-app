from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import DownloadRequestForm
from pathlib import Path
from youtube_downloader.utils.downloader import YouTubeDownloader

async def download_view(request):
    if request.method == 'POST':
        form = DownloadRequestForm(request.POST)
        if form.is_valid():
            url = form.cleaned_data['url']
            download_type = form.cleaned_data['download_type']
            
            # Setup download directory
            download_dir = Path('downloads')
            downloader = YouTubeDownloader(download_dir)
            
            try:
                # Async download based on type
                if download_type == 'audio':
                    success = await downloader.download_audio(url)
                else:
                    success = await downloader.download_video(url)
                
                if success:
                    messages.success(request, 'Download completed successfully!')
                else:
                    messages.error(request, 'Download failed.')
            except Exception as e:
                messages.error(request, f'An error occurred: {str(e)}')
            
            return redirect('download')
    else:
        form = DownloadRequestForm()
    
    return render(request, 'youtube_downloader.html', {'form': form})