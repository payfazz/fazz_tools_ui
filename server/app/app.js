require("dotenv").config();
const config = require("../config/config");
const createHTTPServer = require("../server/http");
const createWebSocketServer = require("../server/ws");

const electron = require("electron");
const { app, BrowserWindow } = electron;

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

let mainWindow;

function createServer() {
  const _server = createHTTPServer({
    port: config.FAZZ_DEBUGGER_PORT,
    onServe: () =>
      console.log(`Server already run at port ${config.FAZZ_DEBUGGER_PORT}`)
  });

  createWebSocketServer(_server);
}

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:7072"
      : `file://${path.join(__dirname, "../../build/index.html")}`
  );

  mainWindow.on("closed", () => (mainWindow = null));
}

function main() {
  createServer();
  createWindow();
}

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
