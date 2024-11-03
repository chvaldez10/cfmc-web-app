import logging
from config import LOG_FORMAT, LOG_FILENAME

def setup_logger() -> None:
    logging.basicConfig(level=logging.INFO,
                        format=LOG_FORMAT,
                        handlers=[
                            logging.FileHandler(LOG_FILENAME),
                            logging.StreamHandler()
                        ]
                        )
    
logger = setup_logger()