
# django
from django.shortcuts import render, redirect
from django.contrib import messages
from django.views import View
from asgiref.sync import sync_to_async

from .models import DownloadRequest
from .forms import DownloadRequestForm
from .tasks import download_youtube_content

class DownloadView(View):
    template_name = 'youtube_downloader.html'
    
    async def get(self, request):
        form = DownloadRequestForm()
        
        # Get recent downloads
        recent_downloads = await sync_to_async(list)(DownloadRequest.objects.order_by('-created_at')[:10])
        
        return render(request, self.template_name, {'form': form, 'recent_downloads': recent_downloads})

    async def post(self, request):
        # Expecting url and download_type
        form = DownloadRequestForm(request.POST)
        
        if form.is_valid():
            try:
                youtube_url = form.cleaned_data['youtube_url']
                download_type = form.cleaned_data['download_type']
                
                create_download_request = sync_to_async(DownloadRequest.objects.create)
                download_request = await create_download_request(
                    youtube_url=youtube_url,
                    download_type=download_type,
                    status='pending'
                )

                download_youtube_content.delay(download_request.id)

                messages.success(request, 'Download request submitted successfully!')
                return redirect('download')
            except Exception as e:
                messages.error(request, f'Error submitting download request: {str(e)}')
        else:
            messages.error(request, 'Please enter a valid YouTube URL.')
            
        # If we get here, there was an error
        return await self.get(request)