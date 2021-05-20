const mysql = require('mysql2/promise');
const mysql1 = require('mysql2');
var con = mysql1.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'movieticketbooking',
        port:3306,
    }
);
module.exports=con;
