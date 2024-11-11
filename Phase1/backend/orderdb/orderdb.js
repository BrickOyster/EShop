const { Pool } = require('pg')
const config = {
    user: process.env.POSTGRES_USER || 'rootuser',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DB || 'order_db',
    host: process.env.POSTGRES_HOST || 'order_db',
    port: process.env.POSTGRES_PORT || '13372'
};

const pool = new Pool(config)
module.exports = pool