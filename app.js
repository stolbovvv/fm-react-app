const express = require('express');

const app = express();
const port = 5000;
const host = '127.0.0.1';

app.use('/api/fm', require('./routes/fm.routes'));

app.listen(port, host, () => console.log(`Server listen http://${host}:${port}...`));
