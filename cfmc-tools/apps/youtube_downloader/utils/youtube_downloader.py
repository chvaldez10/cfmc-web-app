from pathlib import Path
import subprocess
from decouple import config

# pytube fix
from pytubefix import YouTube
from pytubefix.cli import on_progress
from pytubefix.exceptions import VideoUnavailable, RegexMatchError

# django
import logging
logger = logging.getLogger(__name__)

# helpers
from helpers.video_metadata import VideoMetadata

class YouTubeDownloader:
    def __init__(self, download_dir: Path):
        """
        Initialize YouTubeDownloader.
        
        Args:
            download_dir (Path): Directory to save downloads
            test_mode (bool, optional): Run in test mode without actual downloads. Defaults to False.
        """
        
        self.download_dir = download_dir
        self.allow_downloads = config('ALLOW_DOWNLOADS', default=False, cast=bool)
        
    def _get_metadata(self, yt: YouTube, stream) -> VideoMetadata:
        """
        Get video metadata.
        
        Args:
            yt (YouTube): YouTube video object
            stream: Selected stream
        
        Returns:
            VideoMetadata: Extracted metadata
        """
        
        return VideoMetadata(
            title=yt.title,
            duration_seconds=yt.length,
            publish_date=yt.publish_date,
            file_size_mb=stream.filesize / (1024*1024),
            stream_quality=stream.abr if stream.type == "audio" else stream.resolution,
        )

    @staticmethod
    def _run_ffmpeg_merge(video_file: Path, audio_file: Path, output_file: Path) -> bool:
        """
        Merge video and audio using FFmpeg.
        """
        
        cmd = [
            'ffmpeg',
            '-i', str(video_file),
            '-i', str(audio_file),
            '-c', 'copy',
            str(output_file),
            '-y'  # overwrite existing file
        ]
        
        process = subprocess.run(
            cmd,
            capture_output=True,
            universal_newlines=True,
            encoding='utf-8',  # ensure encoding is specified
            errors='replace',  # replace invalid characters
            timeout=600  # 10 minutes timeout
        )
        
        if process.returncode != 0:
            raise Exception(f"FFmpeg error: {process.stderr}")
        
    def _sanitize_filename(self, filename: str) -> str:
        """
        Sanitize filename by removing invalid characters.
        """
        invalid_chars = '<>:"/\\|?*'
        for char in invalid_chars:
            filename = filename.replace(char, '_')
        return filename
            
    def download_audio(self, url: str) -> bool:
        """
        Download the audio from a YouTube video.
        
        Args:
            url (str): The URL of the YouTube video to download.
    
        Returns:
            bool: True if the download was successful, False otherwise.
        """
        try:
            logger.info("Fetching video information...")
            
            # fetch video metadata
            yt = YouTube(url, on_progress_callback=on_progress)
            
            # get audio stream
            stream = yt.streams.get_audio_only()
            
            if not stream:
                return {"success": False, "error": "No suitable audio stream found."}
            
            # get video metadata
            metadata = self._get_metadata(yt, stream)
            logger.info(metadata)
            
            # construct output filename
            output_dir = self.download_dir / "audio"
            output_dir.mkdir(exist_ok=True)
            filename = f"{self._sanitize_filename(metadata.title)}.mp3"
            
            # download audio if not in test mode
            if self.allow_downloads:
                stream.download(output_path=output_dir, filename=filename)
            
            # log success
            logger.info("✅ Download completed successfully!")
            return {"success": True, "file_path": output_dir / filename}
        except (VideoUnavailable, RegexMatchError) as e:
            logger.error(f"❌ Error: {str(e)}")
            return {"success": False, "error": str(e)}

    def download_video(self, url: str) -> bool:
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
            yt = YouTube(url, on_progress_callback=on_progress)
                
            # get the highest resolution stream
            video_stream = yt.streams.filter(type='video', file_extension='mp4').order_by('resolution').desc().first()
            audio_stream = yt.streams.get_audio_only()
            
            # check if stream is valid
            if not video_stream or not audio_stream:
                return {"success": False, "error": "No suitable video stream found."}
            
            # get video metadata
            metadata = self._get_metadata(yt, video_stream)
            logger.info(metadata)
            
            # construct output filename
            output_dir = self.download_dir / "video"
            output_dir.mkdir(exist_ok=True)
            
            # Create safe filenames
            save_title = self._sanitize_filename(metadata.title)
            temp_video = f"video_{save_title}.mp4"
            temp_audio = f"audio_{save_title}.m4a"

            # Final output path
            filename = output_dir / f"{save_title}.mp4"
            
            # download video if not in test mode
            if self.allow_downloads:
                
                # Download with explicit filenames
                video_file = video_stream.download(output_path=output_dir, filename=temp_video)
                audio_file = audio_stream.download(output_path=output_dir, filename=temp_audio)
                
                # merge video and audio
                logger.info("Merging video and audio...")
                self._run_ffmpeg_merge(video_file, audio_file, filename)
                
                # Clean up temporary files
                Path(video_file).unlink()
                Path(audio_file).unlink()
                
            logger.info("✅ Download completed successfully!")
            return {"success": True, "file_path": filename}
        except Exception as e:
            logger.error(f"❌ Error: {str(e)}")
            return {"success": False, "error": str(e)}