console.log("Iniciando servidor....");
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  //res.sendFile(__dirname + '/index.html');
  res.sendFile('http://localhost/tvi/tela.html');
});

io.on('connection', function(socket){
  socket.on('message tv', function(msg){
	console.log("Menssagem da tv: " + msg);
    io.emit('message tv', msg);
  });

  socket.on('message tela', function(msg){
	console.log("Menssagem da tela: " + msg);
    io.emit('message tela', msg);
  });
});

http.listen(3000, function(){
  console.log('Escutando porta *:3000');
});
