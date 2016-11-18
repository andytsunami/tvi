var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(3000);

var clients = {};

function handler (req, res) {
  //fs.readFile(__dirname + '/index.html',
  fs.readFile('localhost/tv.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Erro ao carregar tv.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
console.log("Conexão encontrada");
  socket.on('add-user', function(data){
  	console.log("Encontrado o usuario " + data.username)
    clients[data.username] = {
      "socket": socket.id
    };
  });

  socket.on('private-message', function(data){
    console.log(data.origin + " Enviando: " + data.content + " to " + data.username);
    if (clients[data.username]){
      io.sockets.connected[clients[data.username].socket].emit("add-message", data);
    } else {
      console.log("Usuario não encontrado: " + data.username); 
    }
  });

  socket.on('public', function(data){
    console.log("Enviando publico: " + data.content + " para publico");
    io.sockets.emit('public',data);
  });

  socket.on('conteudo', function(data){
    console.log("O exibindo o conteudo " + data.content + " no momento");
    io.sockets.emit('conteudo',data);
  });

  //Removing the socket on disconnect
  socket.on('disconnect', function() {
  	for(var name in clients) {
  		if(clients[name].socket === socket.id) {
  			delete clients[name];
  			break;
  		}
  	}	
  })

});
