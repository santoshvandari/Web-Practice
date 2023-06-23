let hr=0;
let min=0;
let sec =0;
let count = 0;
let check = false;
function start(){
    if(check==true){
        document.getElementById("start").innerHTML="Start";
        document.getElementById("start").style.background="#1abc9c";
        check=false;
    }else{
        document.getElementById("start").innerHTML="Stop";
        document.getElementById("start").style.background="#3498db";
        check = true;
        watch();
    }
}
function stop(){
    check = false;
}
function reset(){
    check=false;
    hr=min=sec=count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";         
    document.getElementById("count").innerHTML="00";
}
function watch(){
    if(check==true){
        setTimeout("watch()",10);
        count++;
    if(count==100){
        sec++;
        count =0;
    }
    if(sec==60){
        min++;
        sec =0;
    }
    if(min==60){
        hr++;
        min=0;
    }
    let hrs = hr;
    let mins = min;
    let secs = sec;
    let counts = count;
    if(hr<10){
        hrs="0"+hr;
    }
    if(min<10){
        mins="0"+min;
    }
    if(sec<10){
        secs="0"+sec;
    }
    if(count<10){
        counts="0"+count;
    }
        document.getElementById("hr").innerHTML=hrs;
        document.getElementById("min").innerHTML=mins;
        document.getElementById("sec").innerHTML=secs;         
        document.getElementById("count").innerHTML=counts;
    }
 }

