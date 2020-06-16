
// tslint:disable-next-line: no-var-requires
require('dotenv').config();
import express = require('express');

const HOSTTEST = process.env.HOST || 'vacio !!!';
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
console.log(HOSTTEST);
// App
const app: express.Application = express();
app.get('/', (req, res) => {
	res.send('Hello xxxx' + HOSTTEST);
});

app.listen(PORT, HOST, () =>  {
	console.log(`Running on http://${HOST}:${PORT}`);
});
