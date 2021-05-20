var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.set('view engine','ejs');
app.use(express.json());
var port =3031;
app.get("/", function(req, res)
{
    var obj=[{first:"39,29,33,21"},{first:"5,7,3,17"}];
    var str="";
    for(var i=0; i<obj.length; i++)
    {
        if(str!="")
            str+=",";
        str+=obj[i].first;
    }
    console.log(str);
    var s={first:str};
    res.render('sample',{str:s});
});
var server=app.listen(port,function()
{
    console.log(`Server listening the port ${port}`);
});