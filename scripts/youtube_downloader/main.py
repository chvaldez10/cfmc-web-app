"""
Download a YouTube video or audio as MP4 file.
"""

from pytubefix import YouTube
from pytubefix.cli import on_progress
import ffmpeg
import argparse
import os

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

def download_audio(download_dir: str, youtube_url: str):
    try:
        print("Fetching video information...")
        yt = YouTube(youtube_url, on_progress_callback=on_progress)
        
        # Get the highest resolution stream
        print("Finding best quality stream...")
        stream = yt.streams.get_audio_only()
        
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

def _create_downloads_dir_if_not_exists():
    downloads_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'downloads')

    # Create download directory if not exists
    if not os.path.exists(downloads_dir):
        print(f"Creating downloads directory: {downloads_dir}")
        os.makedirs(downloads_dir, exist_ok=True)
    
    return downloads_dir

# Main
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Download a YouTube video or audio as MP4 file.")
    group = parser.add_mutually_exclusive_group()
    group.add_argument("--video", action="store_true", help="Download video only")
    group.add_argument("--audio", action="store_true", help="Download audio only")
    parser.add_argument("--url", type=str, required=True, help="The URL of the YouTube video to download")
    
    args = parser.parse_args()
    
    # Create download directory if not exists
    download_dir = _create_downloads_dir_if_not_exists()
    
    if args.url:
        youtube_url = args.url

    # Download video
    # download_video(download_dir, verbose=True)

    # Download audio
    if args.audio:
        download_audio(download_dir, youtube_url)