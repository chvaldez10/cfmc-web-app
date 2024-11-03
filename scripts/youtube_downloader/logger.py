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

    # Return the logger for the current package/module
    return logging.getLogger(__name__)
    
logger = setup_logger()