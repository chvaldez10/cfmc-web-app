import asyncio
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass
import ffmpeg

# pytube fix
from pytubefix import YouTube
from pytubefix.cli import on_progress
from pytubefix.exceptions import VideoUnavailable, RegexMatchError

# local imports
from logger import logger

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

class YouTubeDownloader:
    def __init__(self, download_dir: Path, test_mode: bool = False):
        self.download_dir = download_dir
        self.download_dir.mkdir(exist_ok=True)
        self.test_mode = test_mode
        
    def _get_metadata(self, yt: YouTube, stream) -> VideoMetadata:
        return VideoMetadata(
            title=yt.title,
            duration_seconds=yt.length,
            publish_date=yt.publish_date,
            file_size_mb=stream.filesize / (1024*1024),
            stream_quality=stream.abr if stream.type == "audio" else stream.resolution,
        )
            
    async def download_audio(self, url: str) -> bool:
        """
        Download the audio from a YouTube video.
        
        Args:
            url (str): The URL of the YouTube video to download.
    
        Returns:
            bool: True if the download was successful, False otherwise.
        """
    
        try:
            logger.info("Fetching video information..."),
            
            # fetch video metadata
            yt = await asyncio.to_thread(
                lambda: YouTube(url, on_progress_callback=on_progress))
            
            # get audio stream
            stream = yt.streams.get_audio_only()
            
            # check if stream is valid
            if not stream:
                logger.error("❌ No suitable audio stream found.")
                return False
            
            # get video metadata
            metadata = self._get_metadata(yt, stream)
            logger.info(metadata)
            
            # construct output filename
            output_dir = self.download_dir / "audio"
            output_dir.mkdir(exist_ok=True)
            filename = f"audio_{metadata.title}.mp3"
            
            # download audio if not in test mode
            if not self.test_mode:
                await asyncio.to_thread(
                    lambda: stream.download(output_path=output_dir, filename=filename))
            
            # log success
            logger.info("✅ Download completed successfully!")
            return True
        except (VideoUnavailable, RegexMatchError) as e:
            logger.error(f"❌ Error: {str(e)}")
            return False

    async def download_video(self, url: str) -> bool:
        """
        Download the video from a YouTube video.
        
        Args:
            url (str): The URL of the YouTube video to download.
    
        Returns:
            bool: True if the download was successful, False otherwise.
        """
        try:
            logger.info("Fetching video information...")
            
            # fetch video metadata
            yt = await asyncio.to_thread(
                lambda: YouTube(url, on_progress_callback=on_progress))
                
            # get the highest resolution stream
            stream = yt.streams.filter(type='video', file_extension='mp4').order_by('resolution').desc().first()
            
            # check if stream is valid
            if not stream:
                logger.error("❌ No suitable video stream found.")
                return False
            
            # get video metadata
            metadata = self._get_metadata(yt, stream)
            logger.info(metadata)
            
            # construct output filename
            output_dir = self.download_dir / "video"
            output_dir.mkdir(exist_ok=True)
            filename = f"video_{metadata.title}.mp4"
            
            # download video if not in test mode
            if not self.test_mode:
                await asyncio.to_thread(
                    lambda: stream.download(output_path=output_dir, filename=filename))
                
            # merge video and audio
            logger.info("Merging video and audio...")
            # ffmpeg.input(video_file).input(audio_file).output(f"{download_dir}/output.mp4", loglevel="quiet").run(overwrite_output=True)
                
            logger.info("✅ Download completed successfully!")
            return True
        except Exception as e:
            logger.error(f"❌ Error: {str(e)}")
            return False