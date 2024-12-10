document.getElementById('send-button').onclick = function() {  
    var userMessage = document.getElementById('user-input').value;  
    document.getElementById('user-input').value = '';  

    document.getElementById('chat-box').innerHTML += '<div>You: ' + userMessage + '</div>';  

    fetch('/chat/', {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/x-www-form-urlencoded',  
            'X-CSRFToken': getCookie('csrftoken'),  
        },  
        body: 'message=' + encodeURIComponent(userMessage)  
    })  
    .then(response => response.json())  
    .then(data => {  
        document.getElementById('chat-box').innerHTML += '<div>Gemini: ' + data.reply + '</div>';  
    });  
};  

function getCookie(name) {  
    let cookieValue = null;  
    if (document.cookie && document.cookie !== '') {  
        const cookies = document.cookie.split(';');  
        for (let i = 0; i < cookies.length; i++) {  
            const cookie = cookies[i].trim();  
            if (cookie.substring(0, name.length + 1) === (name + '=')) {  
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));  
                break;  
            }  
        }  
    }  
    return cookieValue;  
}
