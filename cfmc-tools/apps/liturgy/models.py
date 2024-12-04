from django.db import models
from utils.constants import STATUS_LIST

# Create your models here.
class LiturgyEntry(models.Model):
    service_date = models.DateField(null=False)
    service_number = models.PositiveIntegerField(default=1, null=False)
    liturgy_text = models.TextField(null=False)
    parsed_json = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, null=False, choices=STATUS_LIST, default="pending")
    error_message = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"Liturgy entry for {self.service_date} - Service {self.service_number}"
