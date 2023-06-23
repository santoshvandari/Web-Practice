let slide=document.querySelector(".main");
document.querySelector("img").addEventListener("click",function(){
    slide.classList.add("main-show");
})
document.querySelector(".xicon").addEventListener("click",function(){
    slide.classList.remove("main-show");
})