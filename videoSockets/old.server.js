const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  socket.on("message", (message) => {
    console.log(`User ${socket.id} sent message: ${message}`);
    io.emit("message", message);
  });
});

http.listen(4000, () => {
  console.log("listening on *:4000");
});
