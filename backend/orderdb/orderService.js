const express = require('express');
const cors = require('cors');
const pool = require('./orderdb');
const { Kafka, Partitioners } = require('kafkajs');
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
        const msg = { id: (await pool.query('SELECT MAX(id) FROM orders')).rows[0]['max'], products: products }
        sendOrders(msg);
        // console.log(msg)
        res.status(200).send({ message: "Successfully added order" })
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
        res.status(200).send({ message: "Successfully removed order" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));

const kafka = new Kafka({
  clientId: 'products-app',
  brokers: ['kafka:19092'],
  retry: {
    initialRetryTime: 2000,
    retries: 5
  }
})
console.log("Kafka setup.")

const producer = kafka.producer({
  allowAutoTopicCreation: true,
  createPartitioner: Partitioners.LegacyPartitioner
})

const sendOrders = async (msg)=>{
  await producer.connect()
  await producer.send({
     topic: 'ordersProducer',
     messages: [{
         value: JSON.stringify(msg)
     }]
  })
 
  await producer.disconnect()
  console.log("producer sent " + JSON.stringify(msg))
}

const consumer = kafka.consumer({
  groupId: "orders-group",
  allowAutoTopicCreation: true,
})

const fetchOrdersFromProductTopic = async ()=>{
  try {
    await consumer.connect()
    await consumer.subscribe({topics: ["productsProducer"]})
    console.log("Order consumer subed to productsProducer.")

    await consumer.run({
      eachMessage: async ({message}) => {
        const jsonMsg = JSON.parse(message.value)
        if (jsonMsg) {
          pool.query('UPDATE orders SET status = $2 WHERE orders.id = $1', [jsonMsg['oid'], jsonMsg['ostatus']])
        }
      }
    })
  } catch (error) {               
    await consumer.disconnect()
    console.log(error.message)
  }
}

setTimeout(async ()=>{
  try {
    await fetchOrdersFromProductTopic()
  } catch (error) {
    console.log(error.message)
  }
},2000)

