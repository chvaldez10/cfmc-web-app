from django.urls import path
from .views import LiturgyUploadView

urlpatterns = [
    path('', LiturgyUploadView.as_view(), name='liturgy_upload'),
]