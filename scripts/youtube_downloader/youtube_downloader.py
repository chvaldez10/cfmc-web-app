import asyncio
from pathlib import Path

# pytube fix
from pytubefix import YouTube
from pytubefix.cli import on_progress
from pytubefix.exceptions import VideoUnavailable, RegexMatchError

# local imports
from logger import logger

class YouTubeDownloader:
    def __init__(self, download_dir: Path):
        self.download_dir = download_dir
        self.download_dir.mkdir(exist_ok=True)
        
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
                lambda: YouTube(url, on_progress_callback=on_progress))
            
            stream = yt.streams.get_audio_only()
            
            if not stream:
                print("❌ No suitable audio stream found.")
                return False
            
            print("\nVideo Details:")
            print(f"Title: {yt.title}")
            print(f"File size: {stream.filesize / (1024*1024):.1f} MB")
            print("\nDownloading audio...")
            print("✅ Download completed successfully!")
            
            return True
        except (VideoUnavailable, RegexMatchError) as e:
            print(f"❌ Error: {str(e)}")
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