window.addEventListener("load",function(){
    this.document.querySelector(".preloader").style.display="none";
})
let pause = document.querySelector(".pause");
let play = document.querySelector(".play");
let video= document.querySelector("video");
pause.addEventListener("click",function(){
        video.pause();
        pause.style.display="none";
        play.style.display="inline";
})
play.addEventListener("click",function(){
    video.play();
    play.style.display="none";
    pause.style.display="inline";
})