"""
Download a YouTube video or audio as MP4 file.
"""

import argparse
import asyncio
from pathlib import Path
import ffmpeg

# local imports
from constants import DOWNLOAD_DIR
from youtube_downloader import YouTubeDownloader
from text_parser import parse_text_urls
from logger import logger

async def main() -> None:
    """Main entry point for downloading a YouTube video"""
    parser = argparse.ArgumentParser(
        description="Download a YouTube video or audio as MP4 file.")
    
    # Choose between downloading video or audio
    group = parser.add_mutually_exclusive_group()
    group.add_argument("--video",
                       action="store_true",
                       help="Download video only")
    group.add_argument("--audio",
                       action="store_true",
                       help="Download audio only")
    
    # Optional argument for the first URL
    parser.add_argument("--first",
                        type=str,
                        help="The URL of the YouTube video to download")
    
    # Parse the arguments
    args = parser.parse_args()
    
    # Initialize the downloader
    downloader = YouTubeDownloader(DOWNLOAD_DIR)
    
    # Check if a URL was provided
    urls = parse_text_urls("data/urls.txt", first_only=args.first)
    
    # Download audio
    # if args.audio:
    #     if args.urls:
    #         pass
    #     else:
    #         await downloader.download_audio(args.url)

# Main
if __name__ == "__main__":
    asyncio.run(main())