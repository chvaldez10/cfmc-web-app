import asyncio
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass
import ffmpeg
import subprocess

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
            filename = f"{metadata.title}.mp3"
            
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
            video_stream = yt.streams.filter(type='video', file_extension='mp4').order_by('resolution').desc().first()
            audio_stream = yt.streams.get_audio_only()
            
            # check if stream is valid
            if not video_stream or not audio_stream:
                logger.error("❌ No suitable video stream found.")
                return False
            
            # get video metadata
            metadata = self._get_metadata(yt, video_stream)
            logger.info(metadata)
            
            # construct output filename
            output_dir = self.download_dir / "video"
            output_dir.mkdir(exist_ok=True)
            
            # download video if not in test mode
            if not self.test_mode:
                # Create safe filenames
                safe_title = "".join(c if c.isalnum() else "_" for c in metadata.title).strip("_")
                temp_video = f"video_{safe_title}.mp4"
                temp_audio = f"audio_{safe_title}.m4a"
                final_output = f"{safe_title}.mp4"
                
                # Download with explicit filenames
                video_file = await asyncio.to_thread(
                    lambda: video_stream.download(
                        output_path=output_dir,
                        filename=temp_video
                    ))
                audio_file = await asyncio.to_thread(
                    lambda: audio_stream.download(
                        output_path=output_dir,
                        filename=temp_audio
                    ))
                
                # Final output path
                filename = output_dir / final_output
                
                # merge video and audio
                logger.info("Merging video and audio...")
                logger.info(f"Video file: {video_file}")
                logger.info(f"Audio file: {audio_file}")
                try:
                    cmd = [
                        'ffmpeg',
                        '-i', str(video_file),
                        '-i', str(audio_file),
                        '-c', 'copy',
                        str(filename)
                    ]
                    
                    process = subprocess.run(
                        cmd,
                        capture_output=True,
                        text=True
                    )
                    
                    if process.returncode != 0:
                        raise Exception(f"FFmpeg error: {process.stderr}")
                        
                except Exception as e:
                    logger.error(f"FFmpeg error: {str(e)}")
                    raise
                
                # Clean up temporary files
                # Path(video_file).unlink()
                # Path(audio_file).unlink()
                
            logger.info("✅ Download completed successfully!")
            return True
        except Exception as e:
            logger.error(f"❌ Error: {str(e)}")
            return False