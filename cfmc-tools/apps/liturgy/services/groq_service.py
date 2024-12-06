from decouple import config
from groq import Groq
import json
from typing import Dict, Optional

class GroqService:
    def __init__(self):
        self.api_key = self._load_api_key()
        self.client = Groq(api_key=self.api_key)
        
    def _load_api_key(self) -> str:
        """Load Groq API key from environment variable"""
        api_key = config('GROQ_API_KEY')
        
        if not api_key:
            raise ValueError("No Groq API key found. Set GROQ_API_KEY environment variable.")
        
        return api_key
    
    def _create_parsing_prompt(self) -> str:
        """Create a consistent, detailed prompt for liturgy parsing"""
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
    
    def parse_liturgy_text(self, liturgy_text: str) -> Dict:
        """
        Parse liturgy text using Groq API
        
        Args:
            liturgy_text: The raw liturgy text to parse
            
        Returns:
            Dict containing the parsed liturgy structure
            
        Raises:
            Exception: If API call fails or response is invalid
        """
        full_prompt = self._create_parsing_prompt() + "\n\n" + liturgy_text
        
        completion = self.client.chat.completions.create(
            model="llama3-70b-8192",
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
        
        return json.loads(completion.choices[0].message.content)