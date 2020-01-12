const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const port = 3000;

// Serve static pages with middleware
server.use(express.static('public'));

server.post('/verifyDJ', bodyParser.raw());

// Verification for DJ PIN
server.post('/verifyDJ', (req, res) => {
    console.log(req.body);
    res.send('/html/login-dj.html');
});

server.listen(port, () => console.log(`Server listening on port: ${port}`));