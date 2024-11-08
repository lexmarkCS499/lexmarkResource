const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
    res.send('Hello World! I am lexmark V5');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});