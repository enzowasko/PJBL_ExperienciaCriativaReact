const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Enzo2105', 
    database: 'concessionaria_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log("MySQL Conectado!");
});

module.exports = connection;