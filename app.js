const express = require('express');
const config = require('./config.json');

const _host = config.host || '127.0.0.1';
const _port = config.port || 5000;

const app = express();

app.use('/api/fm', require('./routes/fm.routes'));

app.listen(_port, _host, () => console.log(`Server listen http://${_host}:${_port}...`));
