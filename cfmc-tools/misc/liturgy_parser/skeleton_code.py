from groq import Groq
import os
import json

def load_api_key():
    """
    Load Groq API key from environment variable
    """
    api_key = os.getenv('GROQ_API_KEY')
    if not api_key:
        raise ValueError("No Groq API key found. Set GROQ_API_KEY environment variable.")
    return api_key

def create_liturgy_parsing_prompt():
    """
    Create a consistent, detailed prompt for liturgy parsing
    """
    return """Parse this liturgy text file into a structured JSON format with the following requirements:

    1. JSON Structure:
    {
      "liturgy": [
        {
          "header": str,
          "indicationToStand": bool,
          "personIncharge": str,
          "content": str/object
        }
      ]
    }

    2. Parsing Guidelines:
    - A header is the section or item in the worship service
    - "indicationToStand" is true if there's a * before the header
    - "personIncharge" is the individual or group responsible for that part
    - "content" can be:
      - A simple string description
      - A detailed object for songs (with title, lyrics, etc.)
      - Left blank if no specific content exists

    3. Handling Messy Data:
    - Be flexible with incomplete or inconsistent information
    - If unsure about a field, leave it blank or use best judgment
    - Prioritize capturing the essence of the liturgy

    4. Lyrics Handling:
    - For public domain hymns, include full lyrics
    - For copyrighted songs, include minimal details
    - Preserve original formatting and line breaks

    Parse the following text:
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
    output_file_path = 'parsed_liturgy.json'
    
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