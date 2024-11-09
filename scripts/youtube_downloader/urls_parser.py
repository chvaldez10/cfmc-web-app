from json import load
from constants import URLS_FILE

def parse_urls(first_only: bool = True) -> list[str]:
    """
    Parse the text and return a list of URLs.
    
    Args:
        first_only (bool): Whether to return only the first URL.
        
    Returns:
        list[str]: A list of URLs.
    """
    
    with open(URLS_FILE, "r") as file:
        urls = load(file)["urls"]
        
    if not urls:
        raise ValueError("❌ No URLs found in the file.")
    elif first_only:
        return urls[0]
    else:
        return urls
