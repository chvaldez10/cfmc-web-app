from tqdm import tqdm

class DownloadProgress:
    def __init__(self, stream, prefix: str):
        self.stream = stream
        self.prefix = prefix
        self.progress_bar = None
        
    def __call__(self, chunk, file_handle, bytes_remaining):
        pass