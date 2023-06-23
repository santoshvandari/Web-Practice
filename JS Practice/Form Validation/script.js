let username = document.getElementById("username");
let password = document.getElementById("password");
let errorusername = document.getElementById("user");
let returnCheck;
function check(){
    if(username.value == ""){
        errorusername.innerText = "Username is empty";
        returnCheck = 0;
    }else if(username.value.length < 5){
        errorusername.innerText = "Username must have 5 charcter";
        returnCheck = 0;
    }else{
       errorusername.innerText ="";
       returnCheck=1;
    }
    if(password.value == ""){
        document.getElementById("pass").innerText = "Password is empty";
        returnCheck = 0;
    }else if(password.value.length < 8){
        document.getElementById("pass").innerText = "Password must have 8 character";
        returnCheck = 0;
    }else{
        document.getElementById("pass").innerText ="";
        returnCheck=1;
    }
    if(returnCheck == 1)
        return true;
    else
        return false;
}