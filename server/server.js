var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(3000);

var clients = {};

var water = {soma: 0, quantidade: 0};
var squad = {soma: 0, quantidade: 0};;
var star7 = {soma: 0, quantidade: 0};;
var batman = {soma: 0, quantidade: 0};;
var veloz = {soma: 0, quantidade: 0};;
var beast = {soma: 0, quantidade: 0};;
var bela = {soma: 0, quantidade: 0};;

var pesquisa = {sim: 0, nao: 0};;

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

  socket.on('nota', function(data){

    console.log("O usuario " + data.usuario + " está enviando a nota " + data.estrelas + " do filme " +
     data.filme);
      
      if(data.filme == 'water'){
        water.quantidade++;
        water.soma += data.estrelas;

        console.log("Quantidade " + water.quantidade);
        console.log("Soma " + water.soma);

        var calc = Math.round((water.soma / water.quantidade));

        console.log("Media : " + calc);
        if(calc >= 5) {
          calc = 1.0;
        } else if(calc ==  1.0){
          calc = 0.2;
        } else if(calc ==  2.0){
          calc = 0.4;
        } else if(calc ==  3.0){
          calc = 0.6;
        } else if(calc ==  4.0){
          calc = 0.8;
        }


        
        io.sockets.emit("progress",{
          "filme" : data.filme,
          "media" : calc,
        });

      } else if(data.filme == 'squad'){
        squad.quantidade++;
        squad.soma += data.estrelas;

        console.log("Quantidade " + squad.quantidade);
        console.log("Soma " + squad.soma);

        var calc = Math.round((squad.soma / squad.quantidade));

        console.log("Media : " + calc);
        if(calc >= 5) {
          calc = 1.0;
        } else if(calc ==  1.0){
          calc = 0.2;
        } else if(calc ==  2.0){
          calc = 0.4;
        } else if(calc ==  3.0){
          calc = 0.6;
        } else if(calc ==  4.0){
          calc = 0.8;
        }


        
        io.sockets.emit("progress",{
          "filme" : data.filme,
          "media" : calc,
        });

      } else if(data.filme == 'star7'){
        star7.quantidade++;
        star7.soma += data.estrelas;

        console.log("Quantidade " + star7.quantidade);
        console.log("Soma " + star7.soma);

        var calc = Math.round((star7.soma / star7.quantidade));

        console.log("Media : " + calc);
        if(calc >= 5) {
          calc = 1.0;
        } else if(calc ==  1.0){
          calc = 0.2;
        } else if(calc ==  2.0){
          calc = 0.4;
        } else if(calc ==  3.0){
          calc = 0.6;
        } else if(calc ==  4.0){
          calc = 0.8;
        }


        
        io.sockets.emit("progress",{
          "filme" : data.filme,
          "media" : calc,
        });

      } else if(data.filme == 'batman'){
        batman.quantidade++;
        batman.soma += data.estrelas;

        console.log("Quantidade " + batman.quantidade);
        console.log("Soma " + batman.soma);

        var calc = Math.round((batman.soma / batman.quantidade));

        console.log("Media : " + calc);
        if(calc >= 5) {
          calc = 1.0;
        } else if(calc ==  1.0){
          calc = 0.2;
        } else if(calc ==  2.0){
          calc = 0.4;
        } else if(calc ==  3.0){
          calc = 0.6;
        } else if(calc ==  4.0){
          calc = 0.8;
        }


        
        io.sockets.emit("progress",{
          "filme" : data.filme,
          "media" : calc,
        });

      } else if(data.filme == 'veloz'){
        veloz.quantidade++;
        veloz.soma += data.estrelas;

        console.log("Quantidade " + veloz.quantidade);
        console.log("Soma " + veloz.soma);

        var calc = Math.round((veloz.soma / veloz.quantidade));

        console.log("Media : " + calc);
        if(calc >= 5) {
          calc = 1.0;
        } else if(calc ==  1.0){
          calc = 0.2;
        } else if(calc ==  2.0){
          calc = 0.4;
        } else if(calc ==  3.0){
          calc = 0.6;
        } else if(calc ==  4.0){
          calc = 0.8;
        }


        
        io.sockets.emit("progress",{
          "filme" : data.filme,
          "media" : calc,
        });

      } else if(data.filme == 'beast'){
        beast.quantidade++;
        beast.soma += data.estrelas;

        console.log("Quantidade " + beast.quantidade);
        console.log("Soma " + beast.soma);

        var calc = Math.round((beast.soma / beast.quantidade));

        console.log("Media : " + calc);
        if(calc >= 5) {
          calc = 1.0;
        } else if(calc ==  1.0){
          calc = 0.2;
        } else if(calc ==  2.0){
          calc = 0.4;
        } else if(calc ==  3.0){
          calc = 0.6;
        } else if(calc ==  4.0){
          calc = 0.8;
        }


        
        io.sockets.emit("progress",{
          "filme" : data.filme,
          "media" : calc,
        });

      } else if(data.filme == 'bela'){
        bela.quantidade++;
        bela.soma += data.estrelas;

        console.log("Quantidade " + bela.quantidade);
        console.log("Soma " + bela.soma);

        var calc = Math.round((bela.soma / bela.quantidade));

        console.log("Media : " + calc);
        if(calc >= 5) {
          calc = 1.0;
        } else if(calc ==  1.0){
          calc = 0.2;
        } else if(calc ==  2.0){
          calc = 0.4;
        } else if(calc ==  3.0){
          calc = 0.6;
        } else if(calc ==  4.0){
          calc = 0.8;
        }
       
        io.sockets.emit("progress",{
          "filme" : data.filme,
          "media" : calc,
        });

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

  socket.on('card', function(data){
    console.log("O exibindo o card " + data.content + " no momento");
    io.sockets.emit('card',data);
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
