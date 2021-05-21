var express = require('express');
var app = express();
const session = require('express-session');
var bodyParser = require('body-parser');

var port =3030;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.use(session({secret:"HellInACell",
                resave:false,
                saveUninitialized:false}));

app.set('views','./views');
app.set('view engine','ejs');
app.use(express.json());

const myRoutes = require("./controller/router/route");
app.use(myRoutes);


var server=app.listen(port,function()
{
    console.log(`Server listening the port ${port}`);
});