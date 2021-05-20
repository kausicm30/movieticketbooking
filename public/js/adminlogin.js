function validate()
{
    var verifyemail = 0;
    var verifypwd = 0;
    var pattern = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,6})+$";

    var email = document.myform.email.value;
    var pwd = document.myform.password.value;
    if(email.length == 0)
    {
        document.getElementById("mail-error").style="visibility:visible";
        document.getElementById("mail-error").innerHTML="Please enter mailid";
        return false;
    }
    else if(email.match(pattern))
    {
        document.getElementById("mail-error").style="visibility:hidden";
        document.getElementById("mail-error").innerHTML="";
        verifyemail=1;
    }
    else{
        document.getElementById("mail-error").style="visibility:visible";
        document.getElementById("mail-error").innerHTML="Enter valid mailid";
        return false;
    }

    if(pwd.length == 0)
    {
        document.getElementById("pwd-error").style="visibility:visible";
        document.getElementById("pwd-error").innerHTML="Please enter password";
        return false;
    }
    else if(pwd.length >= 4 && pwd.length <= 15)
    {
        document.getElementById("pwd-error").style="visibility:hidden";
        document.getElementById("pwd-error").innerHTML="";
        verifypwd =1;
    }
    else{
        document.getElementById("pwd-error").style="visibility:visible";
        document.getElementById("pwd-error").innerHTML="Password length must be 8 to 15";
        return false;
    }
    if(verifyemail == 1 && verifypwd == 1)
    {
        if(confirm("Are you sure ?"))
        {
            return true;
        }
    }
}