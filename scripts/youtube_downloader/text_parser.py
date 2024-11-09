def parse_text_urls(urls_file: str, first_only: bool = True) -> list[str]:
    """
    Parse the text and return a list of URLs.
    
    Args:
        urls_file (str): The path to the file containing the URLs.
        first_only (bool): Whether to return only the first URL.
    """
    
    with open(urls_file, "r") as file:
        urls = file.read().splitlines()
        
    if first_only:
        return urls[0]
    else:
        return urls
