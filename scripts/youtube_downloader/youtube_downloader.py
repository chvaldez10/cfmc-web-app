import asyncio
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass


# pytube fix
from pytubefix import YouTube
from pytubefix.cli import on_progress
from pytubefix.exceptions import VideoUnavailable, RegexMatchError

# local imports
from logger import logger
from progress import DownloadProgress

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
    def __init__(self, download_dir: Path):
        self.download_dir = download_dir
        self.download_dir.mkdir(exist_ok=True)
        
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
            yt = await asyncio.to_thread(
                lambda: YouTube(url, on_progress_callback=DownloadProgress(prefix="Downloading audio...")))
            
            stream = yt.streams.get_audio_only()
            
            if not stream:
                logger.error("❌ No suitable audio stream found.")
                return False
            
            metadata = self._get_metadata(yt, stream)
            logger.info(metadata)
            
            # await asyncio.to_thread(
            #     lambda: stream.download(output_path=self.download_dir, filename_prefix="audio_"))
            
            logger.info("✅ Download completed successfully!")
            return True
        except (VideoUnavailable, RegexMatchError) as e:
            logger.error(f"❌ Error: {str(e)}")
            return False

    # def download_video(download_dir: str, verbose: bool = False):
    #     try:
    #         print("Fetching video information...")
    #         yt = YouTube(CONST_YOUTUBE_URL, on_progress_callback=on_progress)
            
    #         # Get the highest resolution stream
    #         video_stream = yt.streams.filter(type='video', file_extension='mp4').order_by('resolution').desc().first()
    #         audio_stream = yt.streams.get_audio_only()
    #         print(video_stream)
            
    #         if video_stream and audio_stream:
    #             if verbose:
    #                 print("\nStream Details:")
    #                 print(f"Title: {yt.title}")
    #                 print(f"Video Resolution: {video_stream.resolution}")
    #                 print(f"Video File size: {video_stream.filesize / (1024*1024):.1f} MB")
                
    #             # Download the video
    #             print("\nDownloading video...")
    #             video_file = video_stream.download(output_path=download_dir, filename_prefix="video_")
    #             print("Downloading audio...")
    #             audio_file = audio_stream.download(output_path=download_dir, filename_prefix="audio_")
                
    #             # merge video and audio
    #             print("Merging video and audio...")
    #             ffmpeg.input(video_file).input(audio_file).output(f"{download_dir}/output.mp4", loglevel="quiet").run(overwrite_output=True)
                
    #             print("✅ Download completed successfully!")
    #             return True
    #         else:
    #             print("❌ No suitable video stream found.")
    #             return False
                
    #     except Exception as e:
    #         print(f"❌ Error: {str(e)}")
    #         return False