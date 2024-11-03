"""
Download a YouTube video or audio as MP4 file.
"""

import logging
import asyncio
from typing import Optional
from pathlib import Path
from pytubefix import YouTube
from pytubefix.cli import on_progress
import ffmpeg
import argparse
import os

from config import DOWNLOAD_DIR
from youtube_downloader import YouTubeDownloader

def download_audio(download_dir: str, youtube_url: str) -> bool:
    """
    Download the audio from a YouTube video.
    
    Args:
        download_dir (str): The directory to save the downloaded file.
        youtube_url (str): The URL of the YouTube video to download.
    
    Returns:
        bool: True if the download was successful, False otherwise.
        
    """
    
    try:
        print("Fetching video information...")
        yt = YouTube(youtube_url, on_progress_callback=on_progress)
        
        # Get the highest resolution stream
        print("Finding best quality stream...")
        stream = yt.streams.get_audio_only()
        
        if not stream:
            print("❌ No suitable audio stream found.")
            return False
        
        if stream:
            print("\nVideo Details:")
            print(f"Title: {yt.title}")
            print(f"File size: {stream.filesize / (1024*1024):.1f} MB")
            
            # Download the video
            print("\nDownloading audio...")
            # stream.download(output_path=download_dir)
            print("✅ Download completed successfully!")
            return True
        else:
            print("❌ No suitable audio stream found.")
            return False
            
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return False

async def main() -> None:
    """Main entry point for downloading a YouTube video"""
    parser = argparse.ArgumentParser(description="Download a YouTube video or audio as MP4 file.")
    group = parser.add_mutually_exclusive_group()
    group.add_argument("--video", action="store_true", help="Download video only")
    group.add_argument("--audio", action="store_true", help="Download audio only")
    parser.add_argument("--url", type=str, help="The URL of the YouTube video to download")
    parser.add_argument("--urls", type=str, nargs='+', help="Multiple URLs of YouTube videos to download")
    args = parser.parse_args()
    
    downloader = YouTubeDownloader(DOWNLOAD_DIR)
    
    if not (args.url or args.urls):
        parser.error("❌ No URL provided. Please provide a URL to download.")
    
    if args.audio:
        if args.urls:
            pass
        else:
            await downloader.download_audio(args.url)

# Main
if __name__ == "__main__":
    asyncio.run(main())