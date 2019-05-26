const express = require("express");

const createHTTPServer = ({ port, onServe }) => {
  const app = express();
  return app.listen(port, onServe);
};

module.exports = createHTTPServer;
