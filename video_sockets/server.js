const cv = require('opencv4nodejs');
const express = require('express');
const app = express();
const path = require('path');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const FPS = 30;
const wCap = new cv.VideoCapture(0);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/src/", 'index.html'));
});

// wait 1 seconds

setInterval(() => {
  const frame = wCap.read();
  const image = cv.imencode('.png', frame).toString('base64');
  // save image to folder
  // cv.imwrite(`./images/${counter}.jpg`, frame);
  io.emit('image', image);
}, 1000 / FPS);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});