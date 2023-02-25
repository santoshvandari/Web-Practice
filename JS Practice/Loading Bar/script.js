let i=0;
let interval=setInterval(()=>{
    if(i==100)
        clearInterval(interval);        
    document.querySelector('.up').style.width=i+"%";
    document.querySelector('p').innerText=i+"%";
    i++;

},10);