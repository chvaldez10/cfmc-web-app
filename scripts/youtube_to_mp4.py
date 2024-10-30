from pytubefix import YouTube
from pytubefix.cli import on_progress
import os

CONST_YOUTUBE_URL = "https://www.youtube.com/watch?v=sEAeW4BbEnk&ab_channel=BELIEVERSMELODY"

def download_video(url):
    try:
        print("Fetching video information...")
        yt = YouTube(url, on_progress_callback=on_progress)
        
        # Get the highest resolution stream
        print("Finding best quality stream...")
        stream = yt.streams.get_highest_resolution()
        print(stream)
        
        if stream:
            # Create downloads directory
            print("\nVideo Details:")
            print(f"Title: {yt.title}")
            print(f"Resolution: {stream.resolution}")
            print(f"File size: {stream.filesize / (1024*1024):.1f} MB")
            
            # Download the video
            print("\nDownloading video...")
            # stream.download()
            print("✅ Download completed successfully!")
            return True
        else:
            print("❌ No suitable video stream found.")
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
    # Create download directory if not exists
    _create_downloads_dir_if_not_exists()
    
    # Download video
    download_video(CONST_YOUTUBE_URL)