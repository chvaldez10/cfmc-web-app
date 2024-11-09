import sys
from typing import TextIO, List

def pretty_print_list(
    items: List[str],
) -> None:
    """
    Pretty print a list with style 😎
    
    Args:
        items: List of strings to print
    """
    CYAN = "\033[96m"
    RESET = "\033[0m"
    BOLD = "\033[1m"
    EMOJI = "🚀"
    OUTPUT = sys.stdout
    
    if not items:
        print(f"{BOLD}[INFO]{RESET} Empty list! 🤷", file=OUTPUT, flush=True)
        return
        
    for idx, item in enumerate(items, 1):
        print(
            f"{CYAN}{EMOJI}{RESET} {BOLD}[{idx}/{len(items)}]{RESET} {item}",
            file=OUTPUT,
            flush=True
        )