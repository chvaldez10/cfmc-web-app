from django.urls import path
from .views import DownloadView

urlpatterns = [
    path('', DownloadView.as_view(), name='download'),
]