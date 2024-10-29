const { Pool } = require('pg')
const config = {
    user: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'rootuser',
    database: process.env.POSTGRES_DB || 'product_db',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || '13370'
};

const pool = new Pool(config)
module.exports = pool