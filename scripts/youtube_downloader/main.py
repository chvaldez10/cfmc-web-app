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
from urls_parser import parse_urls
from logger import logger
from utils import pretty_print_list

# data
from constants import URLS_FILE

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
                        action="store_true",
                        help="Download the first URL only")
    
    # Optional argument for test mode
    parser.add_argument("--test",
                        action="store_true",
                        help="Test mode")
    
    # Parse the arguments
    args = parser.parse_args()
    
    # Initialize the downloader
    downloader = YouTubeDownloader(DOWNLOAD_DIR, test_mode=args.test)
    
    # Check if a URL was provided
    urls = parse_urls(first_only=args.first)
    
    # Download audio
    if args.audio:
        if not urls:
            logger.error("❌ No URLs provided.")
        else:
            for url in urls:
                logger.info(f"Downloading: {url}")
                await downloader.download_audio(url)

# Main
if __name__ == "__main__":
    asyncio.run(main())