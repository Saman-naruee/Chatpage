document.getElementById('send-button').onclick = function() {  
    var userMessage = document.getElementById('user-input').value;  
    document.getElementById('user-input').value = '';  

    // Display user message  
    document.getElementById('chat-box').innerHTML += `  
        <div class="user">You: ${userMessage}</div>  
    `;  

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
        // Display Gemini's reply  
        document.getElementById('chat-box').innerHTML += `  
            <div class="gemini">Gemini: ${data.reply}</div>  
        `;  
        // Scroll to the bottom of the chat box  
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;  
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
