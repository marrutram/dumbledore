const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const HOSTTEST = process.env.HOST || 'vacio !!!';
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
console.log(HOSTTEST)
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello - World ::' + HOSTTEST);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);