from celery import shared_task
from .services.liturgy_service import LiturgyService
from .models import LiturgyEntry

@shared_task()
def parse_liturgy(liturgy_entry_id: int):
    """
    Celery task to parse liturgy text
    
    Args:
        liturgy_entry_id: ID of the LiturgyEntry to process
    """
    try:
        entry = LiturgyEntry.objects.get(id=liturgy_entry_id)
        service = LiturgyService()
        service.process_liturgy(entry)
        return f"Successfully parsed liturgy entry {liturgy_entry_id}"
        
    except LiturgyEntry.DoesNotExist:
        return f"Liturgy entry {liturgy_entry_id} not found"
    except Exception as e:
        return f"Failed to parse liturgy entry {liturgy_entry_id}: {str(e)}"