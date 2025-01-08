const express = require('express');
const cors = require('cors');
const pool = require('./productdb');
const { Kafka, Partitioners } = require('kafkajs');
const port = process.env.SERVICE_PORT || 13371;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    const { usertoken } = req.body
    try {
        // console.log(req.body);
        if (usertoken === null){
          console.log("all")
          const data = await pool.query('SELECT * FROM products')
          res.status(200).send(data.rows)
        } else {
          console.log("not all")
          const data = await pool.query('SELECT * FROM products WHERE usertoken = $1', [usertoken])
          res.status(200).send(data.rows)
        }
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

const sendResponce = async (msg)=>{
  await producer.connect()
  await producer.send({
     topic: 'productsProducer',
     messages: [{
         value: JSON.stringify(msg)
     }]
  })
 
  await producer.disconnect()
  console.log("producer sent " + JSON.stringify(msg))
}

const consumer = kafka.consumer({
  groupId: "products-group",
  allowAutoTopicCreation: true,
})

const fetchProductsFromOrderTopic = async ()=>{
  try {
    await consumer.connect()
    await consumer.subscribe({topics: ["ordersProducer"]})
    console.log("Product consumer subed to ordersProducer.")

    await consumer.run({
      eachMessage: async ({message}) => {
        const jsonMsg = JSON.parse(message.value)
        const orderProducts = jsonMsg['products']
        console.log(orderProducts)
        
        const data = await pool.query('SELECT * FROM products')
        const dbProducts = data.rows

        var result = true

        const productsToUpdate = []
        var j = 0
        loop1: for (let i = 0; i < orderProducts.length-1; i++) {
          while (orderProducts[j] != '{'){
            j++
          }
          while (orderProducts[i] != '}'){
            i++
          }
          const orderProduct = JSON.parse(orderProducts.slice(j,i+1))
          // console.log(orderProduct)
          loop2: for (dbProduct of dbProducts) {
            // console.log(orderProduct['product_id'] + " " + dbProduct['id'] + " " + orderProduct['amount'] + " " + dbProduct['quantity'])
            if (orderProduct['product_id'] === dbProduct['id']) {
              // console.log("Found product.")
              if (orderProduct['amount'] > dbProduct['quantity']) {
                // console.log("NOOOT")
                result=false
                break loop1
              } else {
                // console.log("YEEES")
                productsToUpdate.push({id: orderProduct['product_id'], amount: orderProduct['amount']})
                break loop2
              }
            }
          } j = i
        }

        if(result){
          console.log("consumer accepted\n" + productsToUpdate)
          sendResponce({oid: jsonMsg['id'], ostatus: 'Accepted'})
        } 
        
        if(!result){
          console.log("consumer rejected\n" + productsToUpdate)
          sendResponce({oid: jsonMsg['id'], ostatus: 'Rejected'})
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
    await fetchProductsFromOrderTopic()
  } catch (error) {
    console.log(error.message)
  }
},2000)