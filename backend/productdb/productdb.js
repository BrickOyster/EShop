const { Pool } = require('pg')
const config = {
    user: process.env.POSTGRES_USER || 'rootuser',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DB || 'product_db',
    host: process.env.POSTGRES_HOST || 'product_db',
    port: process.env.POSTGRES_PORT || '13370'
};

const pool = new Pool(config)
module.exports = pool