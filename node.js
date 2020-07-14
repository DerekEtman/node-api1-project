const express = require('express');

const server = express();
const app = express();


app.use('/api', (req,res) => {
    res.status(200).send('Hello from Node.js')
});

app.listen(3000);