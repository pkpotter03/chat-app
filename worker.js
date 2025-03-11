const { parentPort } = require("worker_threads");

const users = {}; 

parentPort.on("message", (data) => {
  if (data.event === "userConnected") {
    users[data.socketId] = true;
    console.log(`User ${data.socketId} is now handled in a worker thread.`);
  }

  if (data.event === "chatMessage") {
    console.log(`Processing message from ${data.socketId}: ${data.message}`);
    parentPort.postMessage({ event: "chatMessage", message: data.message });
  }

  if (data.event === "userDisconnected") {
    delete users[data.socketId];
    console.log(`User ${data.socketId} has disconnected.`);
  }
});
