from celery import shared_task
from decouple import config
from pathlib import Path

# models
from .models import DownloadRequest

# utils
from .utils.youtube_downloader import YouTubeDownloader

@shared_task()
def download_youtube_content(download_request_id: int):
    """
    Celery task to handle YouTube downloads.
    """
    # Get the download request
    download_request = DownloadRequest.objects.get(id=download_request_id)
    download_request.status = 'processing'
    download_request.save()

    # Setup downloader
    downloader = YouTubeDownloader(Path(config('DOWNLOAD_DIR', default='downloads')))

    # Perform download based on type
    if download_request.download_type == 'audio':
        result = downloader.download_audio(download_request.youtube_url)
    elif download_request.download_type == 'video':
        result = downloader.download_video(download_request.youtube_url)
    else:
        raise ValueError("Invalid download type.")

    # WHEN the download is successful
    if result['success']:
        # THEN update the download request to completed
        download_request.status = 'completed'
        download_request.file_path = result['file_path']
    else:
        # WHEN the download fails
        # THEN update the download request to failed
        download_request.status = 'failed'
        download_request.error_message = result.get('error')

    download_request.save()
    return f"Download completed for request {download_request_id}"