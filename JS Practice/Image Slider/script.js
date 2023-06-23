let images = document.querySelectorAll(".image");
let prev = document.getElementById('previous');
let next = document.getElementById('next');
let num = 0;
slide(num);
prev.addEventListener("click",function (){
    slide(-1)});
next.addEventListener("click",function (){
    slide(1);
});
function slide(val){
    num = num+val;
    if(num==images.length){
        num=0;
    }else if(num<0){
        num=images.length-1;
    }
     for(let other of images){
         other.style.display="none";
     }
    images[num].style.display="block";
}