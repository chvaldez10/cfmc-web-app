from celery import shared_task
from django.db import transaction
import logging
from pathlib import Path
from decouple import config
import json

from .services.liturgy_service import LiturgyService
from .models import LiturgyEntry

logger = logging.getLogger(__name__)


@shared_task(bind=True)
def parse_liturgy(self, liturgy_entry_id: int):
    """
    Celery task to parse liturgy text
    
    Args:
        liturgy_entry_id: ID of the LiturgyEntry to process
    """
    try:
        with transaction.atomic():
            entry = LiturgyEntry.objects.get(id=liturgy_entry_id)
            
            # Prevent re processing
            if entry.status in ['processing', 'failed', 'completed']:
                logger.warning(f"Liturgy entry {liturgy_entry_id} has already been processed")
                return
            
            # Set status to processing
            entry.status = 'processing'
            entry.save()
            
            # Process liturgy
            service = LiturgyService()
            service.process_liturgy(entry)
            
            # Download liturgy
            download_liturgy(entry)
            
            logger.info(f"Successfully parsed liturgy entry {liturgy_entry_id}")
            logger.info(f"Downloaded liturgy to {download_liturgy(entry)}")
            return f"Successfully parsed liturgy entry {liturgy_entry_id}"
        
    except LiturgyEntry.DoesNotExist:
        logger.error(f"Liturgy entry {liturgy_entry_id} not found")
        return f"Liturgy entry {liturgy_entry_id} not found"
    
    except Exception as e:
        logger.error(f"Failed to parse liturgy entry {liturgy_entry_id}: {str(e)}")
        return f"Failed to parse liturgy entry {liturgy_entry_id}: {str(e)}"

def download_liturgy(entry: LiturgyEntry) -> None:
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