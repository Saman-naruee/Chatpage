import requests  
from django.shortcuts import render  
from django.http import JsonResponse  

# Replace with your actual Gemini API endpoint and key  
GEMINI_API_URL = 'https://api.gemini.ai/v1/chat'  
API_KEY = ''  

def chat_view(request):  
    if request.method == 'POST':  
        user_message = request.POST.get('message')  
        response = requests.post(GEMINI_API_URL, json={  
            'message': user_message,  
            'apiKey': API_KEY  
        })  

        data = response.json()  
        bot_reply = data.get('reply', 'Sorry, something went wrong.')  
        return JsonResponse({'reply': bot_reply})  

    return render(request, 'chatpage/chat.html')
