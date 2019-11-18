// app_socket.js
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let CONFIG = require('./server/config');


io.on('connection', function(socket){
  console.log('加入聊天~');
  console.log("当前连接数量：" + io.eio.clientsCount);
  io.emit('userNum',io.eio.clientsCount);


  socket.on('msg', function(text){ 
    console.log('发送了一条消息=====: ' + text);
    io.emit('gg', text);
  });


  // disconnect
  socket.on('disconnect',function(){
    console.log('离开聊天~');
    console.log("当前连接数量：" + io.eio.clientsCount);
    io.emit('userNum',io.eio.clientsCount);
  });
});


http.listen(CONFIG.PORT_SOCKET,'0.0.0.0',function(){
  console.log('服务启动成功', "环境：", CONFIG.ENV, "端口号：", CONFIG.PORT_SOCKET);
});
