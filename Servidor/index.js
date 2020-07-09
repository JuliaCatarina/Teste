var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('status', (msg) => {
      console.log(msg);
    });
  });
io.on('connection', (socket) => {
    console.log('Usuário Conectado');
    socket.on('disconnect', () => {
      console.log('Usuário Desconectado');
    });
  });
http.listen(3000, () => {
  console.log('listening on *:3000');
});

