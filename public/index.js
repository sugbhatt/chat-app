const socket = io("http://localhost:3000");

function sendMessage(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const repository = document.getElementById('repository').value;

    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.className = "message align-self-end";

    document.getElementById('chatHistory').appendChild(messageElement);
    socket.emit('message', message);
}

    socket.on('server-message', (message) => {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messageElement.className = "message message-received align-self-start";
    
        document.getElementById('chatHistory').appendChild(messageElement);        
    })