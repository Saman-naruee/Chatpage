import requests  
from django.shortcuts import render  
from django.http import JsonResponse  
from google import generativeai as ai

# Replace with your actual Gemini API endpoint and key  
API_KEY = 'AIzaSyDbZidlVCGu1WFA7KBclXxqh1Dxcxs5Dcg'  

def print_hash():
    return '######################################\n'

def chat_view(request):  
    if request.method == 'POST':  
        try:
            user_message = request.POST.get('message')  
            ai.configure(api_key=API_KEY)
            model = ai.GenerativeModel("gemini-1.5-flash")
            response = model.generate_content(user_message) 
                        
            # Handle the response directly without json conversion
            bot_reply = response.text if hasattr(response, 'text') else 'Sorry, something went wrong.'
            return JsonResponse({'reply': bot_reply})
            
        except Exception as e:
            print(f"Error: {str(e)}")
            return JsonResponse({'reply': 'Sorry, there was an error processing your request. Please check your API key and try again.'}, status=403)

    return render(request, 'chatpage/chat.html')
