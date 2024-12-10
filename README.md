# Chatpage
A chatpage to chat with google free gemini chatbot.


## Prerequisites
- Python 3.8 or higher
- Google API key for Gemini

## Getting Started

### 1. Clone the Repository

git clone https://github.com/yourusername/chatpage.git
cd chatpage


### 2. Install Dependencies

pip install -r requirements.txt


### 3. Get Google Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click on "Get API key"
4. Create a new API key or use an existing one
5. Copy the API key

### 4. Set Up Environment Variables
1. Create a `.env` file in the project root
2. Add your API key:

GEMINI_API_KEY=your_api_key_here


### 5. Run the Application

python app.py


The application will start running on `http://localhost:8000/chat/`

## Usage
1. Open your web browser and navigate to `http://localhost:8000/chat/`
2. Start chatting with the Gemini AI chatbot
3. Type your message in the input field and press Enter or click Send

## Features
- Real-time chat interface
- Gemini AI powered responses
- Simple and intuitive UI

## Troubleshooting
- If you encounter any API errors, make sure your API key is valid
- Check if all dependencies are installed correctly
- Ensure you have a stable internet connection

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
