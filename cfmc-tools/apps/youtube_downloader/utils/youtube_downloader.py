from pathlib import Path
import yt_dlp
from decouple import config

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
        # Create download directory if it doesn't exist
        self.download_dir.mkdir(parents=True, exist_ok=True)
        
    def _get_metadata(self, yt: yt_dlp.YoutubeDL, info) -> VideoMetadata:
        """
        Get video metadata.
        
        Args:
            yt (yt_dlp.YoutubeDL): yt_dlp object
            info: yt_dlp info dictionary
        
        Returns:
            VideoMetadata: Extracted metadata
        """
        
        # Calculate file size safely, handling None values
        filesize = info.get('filesize')
        filesize_mb = filesize / (1024*1024) if filesize is not None else 0
        
        return VideoMetadata(
            title=info['title'],
            duration_seconds=info['duration'],
            publish_date=info['upload_date'],
            file_size_mb=filesize_mb,
            stream_quality=info['format'] if 'format' in info else info['acodec'],
        )

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
            
            options = {
                'format': 'bestaudio/best',
                'postprocessors': [{
                    'key': 'FFmpegExtractAudio',
                    'preferredcodec': 'mp3',
                    'preferredquality': '192',
                }],
                'outtmpl': f'{self.download_dir}/audio/%(title)s.%(ext)s',
            }
            
            with yt_dlp.YoutubeDL(options) as ydl:
                download_flag = self.allow_downloads
                info = ydl.extract_info(url, download=download_flag)
                # The file extension will be changed to mp3 by the postprocessor
                filename = ydl.prepare_filename(info).replace(f".{info['ext']}", ".mp3")
                
                # get video metadata
                metadata = self._get_metadata(ydl, info)
                logger.info(metadata)
                
                # log success
                logger.info("✅ Download completed successfully!")
                return {"success": True, "file_path": filename}
        except Exception as e:
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
            
            # First get info without downloading to check available formats
            with yt_dlp.YoutubeDL({'quiet': True}) as ydl:
                info_dict = ydl.extract_info(url, download=False)
                
                # Log available formats
                if 'formats' in info_dict:
                    logger.info("Available formats:")
                    for format in info_dict['formats']:
                        if 'height' in format and format['height'] is not None:
                            logger.info(f"Format: {format['format_id']}, Resolution: {format['width']}x{format['height']}")
                
                # Find best format with at least 1080p if available
                best_format = 'best'
                for format in info_dict.get('formats', []):
                    if 'height' in format and format['height'] is not None and format['height'] >= 1080:
                        best_format = "bestvideo[height>=1080]+bestaudio/best[height>=1080]/best"
                        logger.info("Selected format with at least 1080p resolution")
                        break
                
                if best_format == 'best':
                    logger.warning("No 1080p resolution available, using best available quality")
            
            # Now download with the selected format
            options = {
                'format': best_format,
                'outtmpl': f'{self.download_dir}/videos/%(title)s.%(ext)s',
            }
            
            with yt_dlp.YoutubeDL(options) as ydl:
                download_flag = self.allow_downloads
                info = ydl.extract_info(url, download=download_flag)
                filename = ydl.prepare_filename(info)
                
                # get video metadata
                metadata = self._get_metadata(ydl, info)
                logger.info(metadata)
                
                # log success
                logger.info("✅ Download completed successfully!")
                return {"success": True, "file_path": filename}
        except Exception as e:
            logger.error(f"❌ Error: {str(e)}")
            return {"success": False, "error": str(e)}