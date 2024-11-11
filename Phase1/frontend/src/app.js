const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const port = 1337;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    // console.log("index");
    try {
        res.set('Content-Type', 'text/html');
        res.status(200).sendFile(path.join(__dirname, 'index.html'));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get('/*', async (req, res) => {
    // console.log("img");
    try {
        res.status(200).sendFile(path.join(__dirname, req.path));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post('/upload', async (req, res) => {
    const { title, img } = req.body;
    let imgPath = path
    try {
        fs.writeFile(imgPath, Buffer(img,'base64'));
        res.status(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));