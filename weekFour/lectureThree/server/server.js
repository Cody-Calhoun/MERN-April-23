const express = require('express');
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
    res.json({ name: "Hello World!!", age: 30 });
});

app.get("/api/dog", (req, res) => {
    res.json({ name: "Charlie!!", age: 5 });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );