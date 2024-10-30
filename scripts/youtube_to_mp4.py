from pytubefix import YouTube
from pytubefix.cli import on_progress

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


# Main
if __name__ == "__main__":
    url = "https://www.youtube.com/watch?v=sEAeW4BbEnk&ab_channel=BELIEVERSMELODY"
    download_video(url)