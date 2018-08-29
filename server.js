const path = require('path');
const http = require('http');
const express = require('express');

var app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = 3000;

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        socket.broadcast.emit('server-message',message);
        // console.log(message);
        
    })
})

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'node_modules')));

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})