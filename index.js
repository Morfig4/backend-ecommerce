const express = require('express');
const mongoose = require('mongoose');
const createMongoMemoryServer = require('./db/db-mongo.js');
const server = express();
const port = 3000;

server.use(express.urlencoded());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World!');
});

createMongoMemoryServer().then(mongod => {
  mongoose.connect(mongod.getUri())
    .then(() => {
      server.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
        console.log('Conectado ao MongoDB Memory Server!');
      });
    })
    .catch((e) => { console.log("error", e); });
});