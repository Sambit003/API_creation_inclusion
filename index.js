const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.get('/', (req, res) => {
    res.end('Welcome to BookZON');
});

app.get("/list_books", (req, res) => {
    fs.readFile(__dirname + '/' + '/movies.json', (err, data) => {
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
