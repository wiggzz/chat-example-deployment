import React from 'react';
import express from 'express'
import http from 'http';
import socketIo from 'socket.io';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import Html from './src/Html';

const app = express();
const server = http.Server(app);
const io = socketIo(server);

const handler = async (req, res) => {
  const body = renderToString(<App />);
  const title = 'Hi';

  res.send(Html({ title, body }));
}

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

app.get('/', handler);

app.get('/index.js', (req, res) => res.sendFile('index.js', { root: 'dist' }));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on ${port}`));
