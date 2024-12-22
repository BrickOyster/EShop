const express = require('express');
const cors = require('cors');
const pool = require('./productdb');
const port = process.env.SERVICE_PORT || 13371;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    const { usertoken } = req.body
    try {
        console.log(req.body);
        const data = await pool.query('SELECT * FROM products WHERE usertoken = $1', [usertoken])
        // console.log(data.rows);
        console.log(data)
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.post('/add', async (req, res) => {
    const { title, image, description, price, quantity, usertoken } = req.body
    try {
        await pool.query('INSERT INTO products ( title, image, description, price, quantity, usertoken ) VALUES ($1, $2, $3, $4, $5, $6)', [title, image, description, price, quantity, usertoken])
        res.status(200).send({ message: "Successfully added product" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.post('/delete', async (req, res) => {
    const { iid } = req.body
    console.log(req.body)
    // console.log('DELETE FROM products USING id WHERE products.id = $1', iid);
    try {
        await pool.query('DELETE FROM products WHERE products.id = $1', [iid])
        res.status(200).send({ message: "Successfully removed product" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.post('/update', async (req, res) => {
    const { iid, title, image, description, price, quantity } = req.body
    try {
        await pool.query('UPDATE products SET title = $1, image = $2, description = $3, price = $4, quantity = $5 WHERE products.id = $6', [title, image, description, price, quantity, iid])
        // console.log(iid, title, image, description, price, quantity);
        res.status(200).send({ message: "Successfully removed product" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));