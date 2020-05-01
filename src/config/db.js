const { Pool } = require("pg")

module.exports = new Pool({
    user: "user",
    password:" ",
    host:"localhost",
    port:5432,
    database:"gerenciamento"
})