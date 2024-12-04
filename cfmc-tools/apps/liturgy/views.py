from django.shortcuts import render, redirect
from django.contrib import messages

async def liturgy_upload_view(request):
    return render(request, 'liturgy_upload.html')
