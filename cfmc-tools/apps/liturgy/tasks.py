from celery import shared_task
from django.db import transaction
import logging

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
            
            logger.info(f"Successfully parsed liturgy entry {liturgy_entry_id}")
            return f"Successfully parsed liturgy entry {liturgy_entry_id}"
        
    except LiturgyEntry.DoesNotExist:
        logger.error(f"Liturgy entry {liturgy_entry_id} not found")
        return f"Liturgy entry {liturgy_entry_id} not found"
    
    except Exception as e:
        logger.error(f"Failed to parse liturgy entry {liturgy_entry_id}: {str(e)}")
        return f"Failed to parse liturgy entry {liturgy_entry_id}: {str(e)}"