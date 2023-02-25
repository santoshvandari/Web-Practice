window.addEventListener("mousemove",function(e){
    document.getElementById('x').innerText=e.clientX;
    document.getElementById('y').innerText=e.clientY;
})
window.addEventListener("mouseout",()=>{
    document.getElementById('x').innerText=0;
    document.getElementById('y').innerText=0;
})