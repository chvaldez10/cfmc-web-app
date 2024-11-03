from tqdm import tqdm

class DownloadProgress:
    """Progress bar handler for downloads."""
    def __init__(self, prefix=""):
        self.pbar = None
        self.prefix = prefix

    def __call__(self, chunk, file_handle, bytes_remaining):
        if not self.pbar:
            total_size = file_handle.tell() + bytes_remaining
            self.pbar = tqdm(
                total=total_size,
                unit='iB',
                unit_scale=True,
                desc=self.prefix
            )
        
        chunk_size = file_handle.tell() - (self.pbar.n if self.pbar.n else 0)
        self.pbar.update(chunk_size)