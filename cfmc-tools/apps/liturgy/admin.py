from django.contrib import admin
from .models import LiturgyEntry

class LiturgyEntryAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'status', 'service_date', 'service_number', 'status')

admin.site.register(LiturgyEntry, LiturgyEntryAdmin)