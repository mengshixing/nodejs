
1 即使聊天时,客户端应该对重练事件添加操作,重连之后消息有可能会重复多遍
  刷新页面是比较简单的做法,

socket.on('disconnect', function() {
    console.log("与服务其断开");
});


socket.on('reconnect', function() {
    console.log("重新连接到服务器");
});
