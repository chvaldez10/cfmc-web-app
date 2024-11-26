import asyncio
from celery import shared_task
from decouple import config
from asgiref.sync import sync_to_async
# models
from .models import DownloadRequest

# utils
from .utils.youtube_downloader import YouTubeDownloader

@shared_task()
async def download_youtube_content(download_request_id: int):
    """
    Celery task to handle YouTube downloads.
    """
    
    print(f"Downloading YouTube content for request {download_request_id}")
    
    try:
        # Get the download request
        download_request = await sync_to_async(DownloadRequest.objects.get)(id=download_request_id)
        download_request.status = 'processing'
        await sync_to_async(download_request.save)()

        # Setup downloader
        # download_dir = config('DOWNLOAD_DIR', default='downloads')
        # print(f"Download directory: {download_dir}")
        # downloader = YouTubeDownloader(download_dir)
        
        # # Create event loop for async operations
        # loop = asyncio.new_event_loop()
        # asyncio.set_event_loop(loop)
        
        # try:
        #     # Perform download based on type
        #     if download_request.download_type == 'audio':
        #         result = loop.run_until_complete(
        #             downloader.download_audio(download_request.url)
        #         )
        #     elif download_request.download_type == 'video':
        #         result = loop.run_until_complete(
        #             downloader.download_video(download_request.url)
        #         )
        #     else:
        #         raise ValueError("Invalid download type.")
        # finally:
        #     loop.close()

        # # Update download request based on result
        # if result['success']:
        #     download_request.status = 'completed'
        #     download_request.file_path = result['file_path']
        # else:
        #     download_request.status = 'failed'
        #     download_request.error_message = result.get('error')
        
        # await download_request.save()
        # return f"Download completed for request {download_request_id}"

    except Exception as exc:
        # Log the error and retry
        download_request = await sync_to_async(DownloadRequest.objects.get)(id=download_request_id)
        download_request.status = 'failed'
        download_request.error_message = str(exc)
        await sync_to_async(download_request.save)