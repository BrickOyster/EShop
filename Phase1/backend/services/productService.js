const express = require('express')
const pool = require('./productdb')
const port = 5001

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM products')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/', async (req, res) => {
    const { title, image, description, price, quantity } = req.body
    try {
        await pool.query('INSERT INTO products ( title, image, description, price, quantity ) VALUES ($1, $2, $3, $4, $5)', [title, image, description, price, quantity])
        res.status(200).send({ message: "Successfully added product" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.delete('/', async (req, res) => {
    const { iid, title } = req.body
    try {
        await pool.query('DELETE FROM products USING id WHERE products.id = iid')
        res.status(200).send({ message: "Successfully removed product" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE products ( id SERIAL PRIMARY KEY, title VARCHAR(50), image VARCHAR(500), description VARCHAR(100), price float, quantity integer )')
        res.status(200).send({ message: "Successfully created table" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))