from typing import Dict
import json
from pathlib import Path
from decouple import config
import logging

from ..models import LiturgyEntry
from .groq_service import GroqService

logger = logging.getLogger(__name__)

class LiturgyService:
    def __init__(self):
        self.groq_service = GroqService()
    
    def create_liturgy_entry(self, data: Dict) -> LiturgyEntry:
        """Create a new liturgy entry"""
        return LiturgyEntry.objects.create(
            service_date=data['service_date'],
            service_number=data['service_number'],
            liturgy_text=data['liturgy_text'],
            status='pending'
        )
    
    def get_recent_entries(self, limit: int = 10):
        """Get recent liturgy entries"""
        return list(LiturgyEntry.objects.order_by('-created_at')[:limit].values())
    
    def process_liturgy(self, entry: LiturgyEntry) -> None:
        """
        Process the liturgy text and update the entry
        
        Args:
            entry: LiturgyEntry instance to process
        """
        try:
            # Set status to processing
            entry.status = 'processing'
            entry.save()

            # Parse liturgy text
            parsed_json = self.groq_service.parse_liturgy_text(entry.liturgy_text)
            
            # Update entry with parsed JSON
            entry.parsed_json = parsed_json
            entry.status = 'completed'
            entry.save()
            
            # Download liturgy
            self._download_liturgy(entry)
            
        except Exception as e:
            entry.status = 'failed'
            entry.error_message = str(e)
            entry.save()
            raise
        
    def _download_liturgy(self, entry: LiturgyEntry) -> None:
        """
        Download the liturgy text
        
        Args:
            entry: LiturgyEntry instance to download
        """
        
        download_dir = Path(config('DOWNLOAD_DIR', default='downloads')) / 'liturgy'
        download_dir.mkdir(exist_ok=True)
        file_path = download_dir / f"{entry.service_date}_{entry.service_number}.json"
        
        try:
            with open(file_path, 'w', encoding='utf-8') as file:
                json.dump(entry.parsed_json, file, ensure_ascii=False)
        except Exception as e:
            logger.error(f"Error downloading liturgy: {str(e)}")
        
        return file_path
    
