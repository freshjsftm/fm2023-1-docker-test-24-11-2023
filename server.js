const http = require('http');
const express = require('express');
const app = express();

app.get('/', async (req, res, next) => {
  try {
    res.status(200).send('hi!');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log('server started at port = ', port);
});
