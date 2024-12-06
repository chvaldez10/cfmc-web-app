from typing import Dict, Optional
from django.db import transaction

from ..models import LiturgyEntry
from .groq_service import GroqService

class LiturgyService:
    def __init__(self):
        self.groq_service = GroqService()
    
    @transaction.atomic
    async def create_liturgy_entry(self, data: Dict) -> LiturgyEntry:
        """Create a new liturgy entry"""
        return await LiturgyEntry.objects.acreate(
            service_date=data['service_date'],
            service_number=data['service_number'],
            liturgy_text=data['liturgy_text'],
            status='pending'
        )
    
    async def get_recent_entries(self, limit: int = 10):
        """Get recent liturgy entries"""
        return await LiturgyEntry.objects.order_by('-created_at')[:limit].values()
    
    def process_liturgy(self, entry: LiturgyEntry) -> None:
        """
        Process the liturgy text and update the entry
        
        Args:
            entry: LiturgyEntry instance to process
        """
        try:
            entry.status = 'processing'
            entry.save()
            
            parsed_json = self.groq_service.parse_liturgy_text(entry.liturgy_text)
            
            entry.parsed_json = parsed_json
            entry.status = 'completed'
            entry.save()
            
        except Exception as e:
            entry.status = 'failed'
            entry.error_message = str(e)
            entry.save()
            raise