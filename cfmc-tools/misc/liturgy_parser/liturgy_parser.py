from groq import Groq
import os
import json
from decouple import config

def load_api_key():
    """
    Load Groq API key from environment variable
    """
    api_key = config('GROQ_API_KEY')
    if not api_key:
        raise ValueError("No Groq API key found. Set GROQ_API_KEY environment variable.")
    return api_key

def create_liturgy_parsing_prompt():
    """
    Create a consistent, detailed prompt for liturgy parsing
    """
    return """You are an expert at parsing liturgy text files into a structured JSON format. Your task is to carefully extract and structure the liturgy details with precision.

    1. JSON Structure Requirements:
    - Create a JSON object with a "liturgy" array
    - Each liturgy item MUST have these fields:
      - header: str (section name)
      - indicationToStand: bool
      - personIncharge: str
      - description: str (optional, can be empty)
      - song_content: {
        - title: str (optional),
        - lyrics: str (optional),
        - hymn_number: str (optional)
        }

    2. Parsing Guidelines:
    - A header is the section or item in the worship service
    - "indicationToStand" is true if there's a * before the header
    - "personIncharge" is the individual or group responsible for that part
    - "description" can be one long string or a series of lines. put them all in the description field until a new header is encountered
    - A song content can be a detailed object (with title, lyrics, hymn number)
    - Leave blank if no specific content exists

    3. Strict Parsing Rules:
    - DO NOT create any additional keys beyond the specified structure
    - If a field has no content, use an empty string ""
    - song_content can only exist if there's a song in that section
    - description and song_content are mutually exclusive (try to choose one or the other and if unsure, choose description)

    4. Content Extraction Guidelines:
    - ABSOLUTELY DO NOT truncate any text
    - Preserve FULL original content
    - Capture ALL text for description or song lyrics
    - Maintain original formatting and line breaks
    - If text is longer, include it in full

    5. Specific Parsing Details:
    - Identify header by most descriptive text
    - Check for asterisk (*) to determine "indicationToStand"
    - Extract "personIncharge" from nearby text
    - For songs, capture:
      - Complete title
      - Full lyrics
      - Complete hymn number/songbook reference

Example Desired Output:
{
  "liturgy": [
    {
      "header": "Call To Worship",
      "indication_to_stand": true,
      "person_in_charge": "Liturgist",
      "description": "Full text of call to worship...",
      "song_content": {}
    }
  ]
}

Please parse the following liturgy text carefully and thoroughly, following these exact specifications:
    """

def read_liturgy_file(file_path):
    """
    Read the liturgy text file
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        return None
    except Exception as e:
        print(f"Error reading file: {e}")
        return None

def parse_liturgy_with_groq(liturgy_text, model="llama3-70b-8192"):
    """
    Use Groq to parse liturgy text
    
    Args:
    - liturgy_text (str): Raw liturgy text
    - model (str): Groq model to use (default is Llama 3 70B)
    
    Returns:
    - Parsed JSON or None
    """
    client = Groq(api_key=load_api_key())
    
    try:
        # Combine prompt and text
        full_prompt = create_liturgy_parsing_prompt() + "\n\n" + liturgy_text

        completion = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert at parsing liturgy texts into a structured JSON format."
                },
                {
                    "role": "user",
                    "content": full_prompt
                }
            ],
            response_format={"type": "json_object"}
        )
        
        # Extract content from the first choice
        parsed_json = json.loads(completion.choices[0].message.content)
        return parsed_json
    
    except Exception as e:
        print(f"Groq API Error: {e}")
        return None

def save_parsed_liturgy(parsed_data, output_path):
    """
    Save parsed liturgy to a JSON file
    """
    try:
        with open(output_path, 'w', encoding='utf-8') as file:
            json.dump(parsed_data, file, indent=2)
        print(f"Parsed liturgy saved to {output_path}")
    except Exception as e:
        print(f"Error saving file: {e}")

def main():
    """
    Main execution function
    """
    liturgy_file_path = 'liturgy.txt'
    output_file_path = 'parsed_liturgy_2.json'
    
    # Read liturgy file
    liturgy_text = read_liturgy_file(liturgy_file_path)

    if liturgy_text:
        # Parse with Groq
        parsed_liturgy = parse_liturgy_with_groq(liturgy_text)
        
        # Save parsed liturgy
        if parsed_liturgy:
            save_parsed_liturgy(parsed_liturgy, output_file_path)

if __name__ == "__main__":
    main()