from pathlib import Path

# logging configuration
LOG_FORMAT = '%(asctime)s - %(levelname)s - %(message)s'
LOG_FILENAME = 'youtube_downloader.log'

# downloads directory
ROOT_DIR = Path(__file__).parent
DOWNLOAD_DIR = ROOT_DIR / 'downloads'

# data directory
DATA_DIR = ROOT_DIR / 'data'
URLS_FILE = DATA_DIR / 'urls.json'
