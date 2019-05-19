const config = require("../config/config");
const createHTTPServer = require("../server/http");
const createWebSocketServer = require("../server/ws");

const _server = createHTTPServer({
  port: config.FAZZ_DEBUGGER_PORT,
  onServe: () =>
    console.log(`Server already run at port ${config.FAZZ_DEBUGGER_PORT}`)
});

const _ws = createWebSocketServer(_server);
