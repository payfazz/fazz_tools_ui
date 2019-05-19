const WebSocketServer = require("websocket").server;

const createWebSocketServer = server => {
  const _ws = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
  });

  _ws.on("request", function(request) {
    const connection = request.accept(null, request.origin);
    connection.on("message", ({ utf8Data: message }) => {
      _ws.emit(message);
    });
  });

  return _ws;
};
module.exports = createWebSocketServer;
