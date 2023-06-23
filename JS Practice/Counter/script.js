let digit=document.querySelector(".num");
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let reset=document.querySelector(".reset");
let counter=0;
plus.addEventListener("click",function(){
    counter++;
    digit.innerText=""+counter;
    color(counter);
})
minus.addEventListener("click",function(){
    counter--;
    digit.innerText=""+counter;
    color(counter);
})
reset.addEventListener("click",function(){
    counter=.0;
    digit.innerText=""+counter;
    color(counter);
})
function color(num){
    if(num<0){
        digit.style="color:#da3939";
    }else if(num>0){
        digit.style="color:green";
    }else{
        digit.style="color:#000";
    }
}