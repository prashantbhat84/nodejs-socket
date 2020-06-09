const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 5000;
const coords = [
  { lat: 12.9, lng: 30.9 },
  { lat: 12.9, lng: 50.9 },
];

io.on("connection", (socket) => {
  io.emit("test", { lat: 12.9, lng: 50.8 });
});

server.listen(port, () => console.log("server running on port:" + port));
