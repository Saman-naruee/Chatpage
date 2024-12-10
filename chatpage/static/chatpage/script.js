document.getElementById('send-button').onclick = function() {  
    var userMessage = document.getElementById('user-input').value;  
    if (userMessage.trim() === "") return; // Prevent sending empty messages  
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
        // Display Gemini's reply with a typing effect  
        typeWriterEffect(data.reply);  
    });  
};  

function typeWriterEffect(text) {  
    let index = 0;  
    const typingElement = document.createElement('div');  
    typingElement.className = 'gemini';  
    document.getElementById('chat-box').appendChild(typingElement);  

    const copyButton = document.createElement('button');  
    copyButton.innerText = 'Copy Code';  
    copyButton.className = 'copy-button';  
    copyButton.style.display = 'none'; // Initially hidden  
    typingElement.appendChild(copyButton);  

    function formatCodeSnippets(text) {  
        return text.replace(/```(.*?)```/gs, '<pre><code>\$1</code></pre>');  
    } 

    const formattedText = formatCodeSnippets(text);  

    if (formattedText.includes('<code>')) {  
        typingElement.innerHTML = formattedText;  
        copyButton.style.display = 'inline-block'; // Show the button if there's code  
    } else {  
        typingElement.innerHTML = formattedText;  
        copyButton.style.display = 'none';  
    }  

    copyButton.onclick = function() {  
        const code = typingElement.querySelector('code') ? typingElement.querySelector('code').innerText : "";  
        navigator.clipboard.writeText(code).then(() => {  
            alert('Code copied to clipboard!');  
        }, err => {  
            console.error('Error copying code: ', err);  
        });  
    };  

    function type() {  
        if (index < formattedText.length) {  
            typingElement.innerHTML += formattedText.charAt(index);  
            index++;  
            setTimeout(type, 10);  
        } else {  
            document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;  
        }  
    }  
    type();  
}

function getCookie(name) {  
    let cookieValue = null;  
    if (document.cookie && document.cookie !== '') {  
        const cookies = document.cookie.split(';');  
        for (let i = 0; i < cookies.length; i++) {  
            const cookie = cookies[i].trim();  
            if (cookie.startsWith(name + '=')) {  
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));  
                break;  
            }  
        }  
    }  
    return cookieValue;  
}
