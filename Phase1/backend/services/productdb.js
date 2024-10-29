const { Pool } = require('pg')
const pool = new Pool({
    user: 'admin_user',
    password: 'adminAccess',
    database: 'productdb'
})

module.exports = pool