import asyncio
from celery import shared_task
from decouple import config

# models
from .models import DownloadRequest

# utils
from .utils.youtube_downloader import YouTubeDownloader

@shared_task(bind=True, max_retries=3)
def download_youtube_content(self, download_request_id: int):
    """
    Celery task to handle YouTube downloads.
    """
    try:
        # Get the download request
        download_request = DownloadRequest.objects.get(id=download_request_id)
        download_request.status = 'processing'
        download_request.save()

        # Setup downloader
        download_dir = config('DOWNLOAD_DIR', default='downloads')
        print(f"Download directory: {download_dir}")
        downloader = YouTubeDownloader(download_dir)
        
        # Create event loop for async operations
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        
        try:
            # Perform download based on type
            if download_request.download_type == 'audio':
                result = loop.run_until_complete(
                    downloader.download_audio(download_request.url)
                )
            elif download_request.download_type == 'video':
                result = loop.run_until_complete(
                    downloader.download_video(download_request.url)
                )
            else:
                raise ValueError("Invalid download type.")
        finally:
            loop.close()

        # Update download request based on result
        if result['success']:
            download_request.status = 'completed'
            download_request.file_path = result['file_path']
        else:
            download_request.status = 'failed'
            download_request.error_message = result.get('error')
        
        download_request.save()
        return f"Download completed for request {download_request_id}"

    except Exception as exc:
        # Log the error and retry
        download_request = DownloadRequest.objects.get(id=download_request_id)
        download_request.status = 'failed'
        download_request.error_message = str(exc)
        download_request.save()
        
        # Retry the task
        raise self.retry(exc=exc, countdown=60)  # Retry after 1 minute