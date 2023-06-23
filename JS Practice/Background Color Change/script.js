let body = document.body;
let white = document.getElementById("white");
let green = document.getElementById("green");
let aqua = document.getElementById("aqua");
let black = document.getElementById("black");
function color(code){
    body.style.background=code;
    switch(code){
        case '#ffffff':
                white.style = "height: 60px; width: 60px";
                green.style = "height: 50px; width: 50px";
                aqua.style = "height:50px; width:50px";
                black.style = "height:50px; width:50px";
                break;
        case '#008000':
            white.style = "height: 50px; width: 50px";
            green.style = "height: 60px; width: 60px";
            aqua.style = "height:50px; width:50px";
            black.style = "height:50px; width:50px";
            break;                
         case '#00ffff':
            white.style = "height: 50px; width: 50px";
            green.style = "height: 50px; width: 50px";
            aqua.style = "height:60px; width:60px";
            black.style = "height:50px; width:50px";
                break;
        case '#000000':
            white.style = "height: 50px; width: 50px";
            green.style = "height: 50px; width: 50px";
            aqua.style = "height:50px; width:50px";
            black.style = "height:60px; width:60px";
            break;
    }
    if(code == '#000000' || code == '#008000'){
        body.style.color = '#fff';
    }
    else{
        body.style.color = '#000'
    }
}
// setInterval(() => {
//     setTimeout(() => {
//         white.click();
//     }, 1000);
//     setTimeout(() => {
//         green.click();
//     }, 1500);
//     setTimeout(() => {
//         aqua.click();
//     }, 2000);
//     setTimeout(() => {
//         black.click();
//     }, 2500);
// }, 2200);



/* Another Way to Implement
let white = document.getElementById("white");
let green = document.getElementById("green");
let aqua = document.getElementById("aqua");
let black = document.getElementById("black");
let body = document.body;
white.addEventListener('click', function(){
    body.style = "background: #fff; color: #000";
})
green.addEventListener('click', function(){
    body.style = "background: green; color: #fff";
})
aqua.addEventListener('click', function(){
    body.style = "background: aqua; color: #000"
})
black.addEventListener('click', function(){
    body.style = "background: #000; color:#fff"
})     */