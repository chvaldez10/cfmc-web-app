import logging
from django.db import transaction
from celery import shared_task
from celery.exceptions import SoftTimeLimitExceeded

from .services.liturgy_service import LiturgyService
from .models import LiturgyEntry

logger = logging.getLogger(__name__)

@shared_task(bind=True,
             max_retries=3,
             soft_time_limit=60,
             time_limit=300,
             default_retry_delay=60)
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
            if entry.status in ['processing', 'completed']:
                logger.warning(f"Liturgy entry {liturgy_entry_id} has already been processed")
                return
            
            if entry.status == 'pending' and self.request.retries > self.max_retries:
                entry.status = 'failed'
                entry.error_message = f"Liturgy entry {liturgy_entry_id} has failed too many times"
                entry.save()
                logger.error(f"Liturgy entry {liturgy_entry_id} has failed too many times")
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
    except SoftTimeLimitExceeded:
        entry = LiturgyEntry.objects.get(id=liturgy_entry_id)
        entry.status = 'failed'
        entry.error_message = f"Liturgy entry {liturgy_entry_id} took too long to process"
        entry.save()
        logger.error(f"Liturgy entry {liturgy_entry_id} took too long to process")

        # retry the task
        raise self.retry(exc=TimeoutError("Task took too long to process"))
    except Exception as e:
        try:
            entry = LiturgyEntry.objects.get(id=liturgy_entry_id)
            entry.status = 'failed'
            entry.error_message = str(e)
            entry.save()
        except Exception as save_error:
            logger.error(f"Could not update entry status: {save_error}")
        
        # Retry the task with exponential backoff
        raise self.retry(exc=e)