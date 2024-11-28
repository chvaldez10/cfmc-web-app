import logging
from pathlib import Path
from constants import LOG_FORMAT, LOG_FILENAME

def setup_logger() -> None:
    """
    Setup the logger for the current package/module.
    """
    
    # Create the log file path
    log_dir = Path(__file__).parent / "logs"
    log_dir.mkdir(exist_ok=True)
    
    log_file = log_dir / LOG_FILENAME
    
    logging.basicConfig(level=logging.INFO,
                        format=LOG_FORMAT,
                        handlers=[
                            logging.FileHandler(log_file, encoding="utf-8"),
                            logging.StreamHandler()
                        ]
                        )

    # Return the logger for the current package/module
    return logging.getLogger(__name__)
    
logger = setup_logger()