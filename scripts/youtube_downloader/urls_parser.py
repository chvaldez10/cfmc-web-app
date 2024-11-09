from json import load
from constants import URLS_FILE
from logger import logger

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
        logger.error("❌ No URLs found in the file.")
    elif first_only:
        logger.info(f"✅ First URL: {urls[0]}")
        return [urls[0]]
    else:
        logger.info(f"✅ {len(urls)} URLs found.")
        return urls
