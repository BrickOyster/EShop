const express = require('express');
const cors = require('cors');
const pool = require('./orderdb');
const port = process.env.SERVICE_PORT || 13373;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    const { usertoken } = req.body
    try {
        // console.log(req.body);
        const data = await pool.query('SELECT * FROM orders WHERE orders.usertoken = $1', [usertoken])
        // console.log(data.rows);
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.post('/add', async (req, res) => {
    const { products, total_price, usertoken } = req.body
    try {
        await pool.query('INSERT INTO orders ( products, total_price, usertoken ) VALUES ($1, $2, $3)', [products, total_price, usertoken])
        res.status(200).send({ message: "Successfully added product" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.delete('/', async (req, res) => {
    const { iid } = req.body
    // console.log('DELETE FROM products USING id WHERE products.id = $1', iid);
    try {
        await pool.query('DELETE FROM orders WHERE orders.id = $1', [iid])
        res.status(200).send({ message: "Successfully removed product" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));