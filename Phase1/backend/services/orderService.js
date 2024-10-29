const express = require('express')
const pool = require('./order_db')
const port = 5001

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM orders')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/', async (req, res) => {
    const { title, image, description, price, quantity } = req.body
    try {
        await pool.query('INSERT INTO orders ( title, image, description, price, quantity ) VALUES ($1, $2, $3, $4, $5)', [title, image, description, price, quantity])
        res.status(200).send({ message: "Successfully added product" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE orders ( id SERIAL PRIMARY KEY, title VARCHAR(50), image VARCHAR(500), description VARCHAR(100), price float, quantity integer )')
        res.status(200).send({ message: "Successfully created table" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))