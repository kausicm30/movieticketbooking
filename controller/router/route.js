var express = require('express');
const app = express();
const connection = require('../../model/database');
const session = require('express-session');

app.use(session({secret:"HellInACell",
                resave:false,
                saveUninitialized:false}));
connection.connect(async(err)=>
{
    if(err){
        console.log(err);
    }
    else
        console.log('Connected with Database wohooo!!!');
});
app.get('/',async(req,res)=>
{
    res.render('home');
});

app.get('/adminlogin',async(req,res)=>
{
    res.render('adminlogin');
});
app.post('/validateadminloginform', async(req,res)=>
{
    var email=req.body.email;
    var pwd = req.body.password;
    if(email==="admin@gmail.com" && pwd ==="admin")
    {
        req.session.loggedIn = true;
        req.session.username = email;
        connection.query('SELECT * from seatbooking',async(err,result1)=>
        {
            res.render('adminpage',{data:result1});
        });
    }
    else{
        var obj ={data:'Please enter valid credentials'}
        res.render('adminlogin',{reason:obj});
    }
});
app.get('/home',async(req,res)=>
{
    res.render('home');
});
app.get('/login',async(req,res)=>
{
    res.render('loginsignup');
});

app.post('/signup',async(req,res)=>
{
    var name = req.body.user;
    var email = req.body.email;
    var pwd = req.body.password;
    req.session.loggedIn = true;
    req.session.username = email;
    connection.query('INSERT INTO register VALUES(?,?,?)',[name,email,pwd],async(err,result)=>
    {
        if(err)
            throw err;
        else
            console.log("Values inserted successfully");
    });
    res.render('movies');
});

app.post('/signin', async(req,res)=>
{
    var email=req.body.email;
    var pwd = req.body.password;
    connection.query('SELECT * FROM register WHERE email LIKE ? AND password LIKE ?',[email,pwd],async(err,result)=>
    {
        if(result != '')
        {
            req.session.user = email;
            req.session.loggedIn = true;
            req.session.save();
            res.render('movies');
        }
        else{
            res.render('loginsignup');
        }
    });
});

app.get('/movie1',async(req,res)=>
{
    res.render('movie1d');
});
app.get('/seatbookforgodzilla',async(req,res)=>
{
    var str="";
    var movie="GodzillavsKong";
    var time="11.00am";
     connection.query('SELECT * FROM seatbooking where moviename="GodzillavsKong"', async(err,result)=>{
        result.forEach(row=>{
            //console.log(row);
            if(str!="")
                str+=",";
            str+=row.seatnumbers;
            //console.log(str);
        });
        console.log(str);
        console.log(str);
        var s={first:str,moviename:movie,movietime:time};
        res.render('seatbooking',{str:s});
    });
});
app.get('/movie2',async(req,res)=>
{
    res.render('movie2d');
});
app.get('/seatbookformaster',async(req,res)=>
{
    var str="";
    var movie="Master";
    var time="2.00pm";
     connection.query('SELECT * FROM seatbooking where moviename="Master"', async(err,result)=>{
        result.forEach(row=>{
            //console.log(row);
            if(str!="")
                str+=",";
            str+=row.seatnumbers;
            //console.log(str);
        });
        console.log(str);
        console.log(str);
        var s={first:str,moviename:movie,movietime:time};
        res.render('seatbooking',{str:s});
    });
});
app.get('/movie3',async(req,res)=>
{
    res.render('movie3d');
});
app.get('/seatbookforKGF',async(req,res)=>
{
    var str="";
    var movie="KGF";
    var time="5.00pm";
     connection.query('SELECT * FROM seatbooking where moviename="KGF"', async(err,result)=>{
        result.forEach(row=>{
            //console.log(row);
            if(str!="")
                str+=",";
            str+=row.seatnumbers;
            //console.log(str);
        });
        console.log(str);
        console.log(str);
        var s={first:str,moviename:movie,movietime:time};
        res.render('seatbooking',{str:s});
    });
});
app.get('/movie4',async(req,res)=>
{
    res.render('movie4d');
});
app.get('/seatbookforDrishyam2',async(req,res)=>
{
    var str="";
    var movie="Drishyam 2";
    var time="8.00pm";
     connection.query('SELECT * FROM seatbooking where moviename="Drishyam 2"', async(err,result)=>{
        result.forEach(row=>{
            //console.log(row);
            if(str!="")
                str+=",";
            str+=row.seatnumbers;
            //console.log(str);
        });
        console.log(str);
        console.log(str);
        var s={first:str,moviename:movie,movietime:time};
        res.render('seatbooking',{str:s});
    });
});
app.get('/movie5',async(req,res)=>
{
    res.render('movie5d');
});
app.get('/seatbookforWar',async(req,res)=>
{
    var str="";
    var movie="WAR";
    var time="8.00am";
     connection.query('SELECT * FROM seatbooking where moviename="WAR"', async(err,result)=>{
        result.forEach(row=>{
            //console.log(row);
            if(str!="")
                str+=",";
            str+=row.seatnumbers;
            //console.log(str);
        });
        console.log(str);
        console.log(str);
        var s={first:str,moviename:movie,movietime:time};
        res.render('seatbooking',{str:s});
    });
});

app.post('/getseatbookingdetails',async(req,res)=>
{
    var email=req.session.user;
    //console.log(email);
    var movieName = req.body.movie;
    var movieTime = req.body.time;
    var totalNoOfTickets = req.body.count;
    var seatnumbers = req.body.seat;
    var totalAmount = req.body.amount;
    connection.query('INSERT INTO seatbooking VALUES(?,?,?,?,?,?)',[email,movieName,movieTime,totalNoOfTickets,seatnumbers,totalAmount],async(err,result)=>
    {
        if(err)
            throw err;
        else{
            console.log("Values inserted successfully");
            res.redirect('/logout');
        }
    });
});
app.get('/logout',async(req,res)=>
{
    req.session.destroy();
    //console.log(req.session.user);
    res.redirect('/');
});
app.get('*',async(req,res)=>
{
    res.render('404pagenotfound');
});


module.exports = app;