from celery import shared_task
from decouple import config
from asgiref.sync import sync_to_async
# models
from .models import DownloadRequest

# utils
from .utils.youtube_downloader import YouTubeDownloader

@shared_task()
def download_youtube_content(download_request_id: int):
    """
    Celery task to handle YouTube downloads.
    """
    # Get the download request synchronously
    download_request = DownloadRequest.objects.get(id=download_request_id)
    download_request.status = 'processing'
    download_request.save()

    # Setup downloader
    downloader = YouTubeDownloader(config('DOWNLOAD_DIR', default='downloads'))

    # Perform download based on type
    if download_request.download_type == 'audio':
        result = downloader.download_audio(download_request.url)
    elif download_request.download_type == 'video':
        result = downloader.download_video(download_request.url)
    else:
        raise ValueError("Invalid download type.")

    # Update download request based on result
    if result['success']:
        download_request.status = 'completed'
        download_request.file_path = result['file_path']
    else:
        download_request.status = 'failed'
        download_request.error_message = result.get('error')

    download_request.save()
    return f"Download completed for request {download_request_id}"