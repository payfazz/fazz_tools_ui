require("dotenv").config();
const config = require("../config/config");
const createHTTPServer = require("../server/http");
const createWebSocketServer = require("../server/ws");
const path = require("path");
const isDev = require("electron-is-dev");
const electron = require("electron");
const { app, BrowserWindow } = electron;

let mainWindow;
let server;

const createServer = () => {
  server = createHTTPServer({
    port: config.FAZZ_DEBUGGER_PORT,
    onServe: () =>
      console.log(`Server already run at port ${config.FAZZ_DEBUGGER_PORT}`)
  });

  createWebSocketServer(server);
};

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? `http://localhost:${process.env.FAZZ_DEBUGGER_PORT_UI}`
      : `file://${path.join(__dirname, "../../build/index.html")}`
  );

  mainWindow.on("closed", () => {
    server = null;
    mainWindow = null;
  });
};

const main = () => {
  createServer();
  createWindow();
};

app.on("ready", main);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
