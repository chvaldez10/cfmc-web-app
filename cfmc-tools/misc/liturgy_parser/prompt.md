# List of prompts

## Prompt 1: Be flexible with incomplete or inconsistent information

````Parse this liturgy text file into a structured JSON format with the following requirements:

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

Please parse the entire text, capturing as much detail as possible while maintaining the specified JSON structure.```
````

## Prompt 2: More strict rules

```You are an expert at parsing liturgy text files into a structured JSON format. Your task is to carefully extract and structure the liturgy details with precision.

1. JSON Structure Requirements:
- Create a JSON object with a "liturgy" array
- Each liturgy item MUST have these fields:
  * header: str (section name)
  * indicationToStand: bool
  * personIncharge: str
  * description: str (optional, can be empty)
  * song_content: {
    "title": str (optional),
    "lyrics": str (optional),
    "hymn_number": str (optional)
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
  * Complete title
  * Full lyrics
  * Complete hymn number/songbook reference

Example Desired Output:
{
  "liturgy": [
    {
      "header": "Call To Worship",
      "indicationToStand": true,
      "personIncharge": "Liturgist",
      "description": "Full text of call to worship...",
      "song_content": {}
    }
  ]
}

Please parse the following liturgy text carefully and thoroughly, following these exact specifications:
```
