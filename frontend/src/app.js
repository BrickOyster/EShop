const express = require('express');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const port = 1337;

let pdhost = process.env.PRODUCTS_HOST || 'localhost';
let pdport = process.env.PRODUCTS_PORT || 13371;
let odhost = process.env.ORDERS_HOST   || 'localhost';
let odport = process.env.ORDERS_PORT   || 13373;

let pdurl = `http://${pdhost}:${pdport}/`;
let odurl = `http://${odhost}:${odport}/`;

const app = express();
app.use(cors());
app.use(express.json({ limit: '250kb' }));

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

app.post('/upload', async (req, res) => {
    const { title, image } = req.body;
    let imgPath = path.join(__dirname, `img/${title}`);
    try {
        fs.writeFile(imgPath, Buffer.from(image,'base64'), (err) => {});
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

// app.post('/rename', async (req, res) => {
//     const { title, new_title } = req.body;
//     let imgPath = path.join(__dirname, `img/${title}`);
//     let new_imgPath = path.join(__dirname, `img/${new_title}`);
//     try {
//         fs.rename(imgPath, new_imgPath, (err) => {});
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

app.post('/remove', async (req, res) => {
    const { title } = req.body;
    let imgPath = path.join(__dirname, `img/${title}`);
    // console.log(title+'\n'+imgPath+'\n'+image);
    try {
        fs.unlink(imgPath, (err) => {});
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

app.post('/products', async (req, res) => {
    try {
        const response = await axios.post(pdurl, req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/products/add', async (req, res) => {
    try {
        const response = await axios.post(pdurl+'add', req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.delete('/products', async (req, res) => {
    try {
        const response = await axios.post(pdurl+'delete', req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/products/update', async (req, res) => {
    try {
        const response = await axios.post(pdurl+'update', req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/orders', async (req, res) => {
    try {
        const response = await axios.post(odurl, req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/orders/add', async (req, res) => {
    try {
        const response = await axios.post(odurl+'add', req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.get('/*', async (req, res) => {
    // console.log(__dirname + "  " + req.path);
    try {
        res.status(200).sendFile(path.join(__dirname, req.path));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));