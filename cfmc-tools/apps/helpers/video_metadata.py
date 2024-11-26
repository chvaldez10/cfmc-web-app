from dataclasses import dataclass
from datetime import datetime

@dataclass
class VideoMetadata:
    title: str
    duration_seconds: int
    publish_date: datetime
    file_size_mb: float
    stream_quality: str
    
    @property
    def duration_formatted(self) -> str:
        return f"{self.duration_seconds // 60}:{self.duration_seconds % 60:02d}"
    
    def __str__(self) -> str:
        return "\n".join([
            "Video Details:",
            f"Title: {self.title}",
            f"Duration: {self.duration_formatted}",
            f"Published: {self.publish_date.strftime('%Y-%m-%d')}",
            f"Quality: {self.stream_quality}",
            f"File size: {self.file_size_mb:.1f} MB"
        ])