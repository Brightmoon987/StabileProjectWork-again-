const express = require('express');
const app = express();
const port = 3000;

// Servire i file statici dalla cartella www
app.use(express.static('www'));

// Endpoint API per mante.json
const mante = require('./mante.json');
app.get('/api/mante', (req, res) => {
    res.json(mante);
});

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});