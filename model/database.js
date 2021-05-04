const mysql = require('mysql2');
var con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'movieticketbooking',
        port:3306
    }
);
module.exports=con;
