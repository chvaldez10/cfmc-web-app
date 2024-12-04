from django.urls import path
from .views import liturgy_upload_view

urlpatterns = [
    path('', liturgy_upload_view, name='liturgy_parser'),
]