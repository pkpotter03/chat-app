const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { Worker } = require("worker_threads");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname)); 

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  const worker = new Worker("./worker.js");

  worker.postMessage({ event: "userConnected", socketId: socket.id });

  socket.on("chat message", (msg) => {
    worker.postMessage({ event: "chatMessage", socketId: socket.id, message: msg });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    worker.postMessage({ event: "userDisconnected", socketId: socket.id });
  });

  worker.on("message", (response) => {
    if (response.event === "chatMessage") {
      socket.broadcast.emit("chat message", response.message);
    }
  });

  worker.on("error", (err) => console.error("Worker error:", err));
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
