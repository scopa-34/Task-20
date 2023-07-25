function sendMessage() {
    const userMessageInput = document.getElementById('user-message');
    const userMessageText = userMessageInput.value.trim();
  
    if (userMessageText !== '') {
      const chatContainer = document.getElementById('chat');
      const newMessage = document.createElement('div');
      newMessage.className = 'message sent';
      newMessage.innerHTML = `<span class="message-text">${userMessageText}</span>`;
      chatContainer.appendChild(newMessage);
  

      userMessageInput.value = '';
    }
  }
  
  
  
  
  
  