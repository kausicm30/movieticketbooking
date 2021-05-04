var express = require('express');
const router = express.Router();
const session = require('express-session');
const connection = require('../../model/database');
connection.connect(function(err)
{
    if(err)
        console.log(err);
    else
        console.log('Connected with Database');
});
var mailid="";
router.get('/',function(req,res)
{
    res.render('home');
});
router.get('/adminlogin',function(req,res)
{
    res.render('adminlogin');
});
router.post('/validateadminloginform', function(req,res)
{
    var email=req.body.email;
    mailid=email;
    var pwd = req.body.password;
    if(email="admin@gmail.com" && pwd =="admin")
    {
        connection.query('SELECT * from movieticket',function(req,result1)
        {
            res.render('adminpage',{data:result1});
        });
    }
    else
        res.render('adminlogin');
});
router.get('/home',function(req,res)
{
    res.render('home');
});

router.get('/login',function(req,res)
{
    res.render('loginsignup');
});

router.post('/signup',function(req,res)
{
    var name = req.body.user;
    var email = req.body.email;
    mailid=email;
    var pwd = req.body.password;
    connection.query('INSERT INTO register VALUES(?,?,?)',[name,email,pwd],function(err,result)
    {
        if(err)
            throw err;
        else
            console.log("Values inserted successfully");
    });
    res.render('movies');
});

router.post('/signin', function(req,res)
{
    var email=req.body.email;
    mailid=email;
    var pwd = req.body.password;
    connection.query('SELECT * FROM register WHERE email LIKE ? AND password LIKE ?',[email,pwd],function(err,result)
    {
        if(result != '')
        {
            res.render('movies');
        }
        else{
            res.render('loginsignup');
        }
    });
});

router.get('/movie1',function(req,res)
{
    res.render('movie1d');
});
router.get('/movie2',function(req,res)
{
    res.render('movie2d');
});
router.get('/movie3',function(req,res)
{
    res.render('movie3d');
});
router.get('/movie4',function(req,res)
{
    res.render('movie4d');
});
router.get('/movie5',function(req,res)
{
    res.render('movie5d');
});

router.get('/seatbookforgodzilla',function(req,res)
{
    res.render('seatbooking');
});

router.post('/buytickets',function(req,res)
{
    var name = req.body.moviename;
    var tot = req.body.tot;
    var tamt = req.body.tamt;
    var time="11.00am"
    connection.query('INSERT INTO movieticket VALUES(?,?,?,?,?)',[mailid,tot,time,name,tamt],function(err,result)
    {
        if(err)
            throw err;
        else
            console.log("Values inserted successfully");
    });
    res.render('home');
});
router.get('*',function(req,res)
{
    res.render('404pagenotfound');
});
module.exports = router;