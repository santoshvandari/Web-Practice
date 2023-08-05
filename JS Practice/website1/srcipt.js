"use strict";
let tablist=document.querySelectorAll(".tabs ul li");
let tabcontentlist=document.querySelectorAll(".tab-content .content");
for( let tab of tablist){
    tab.addEventListener("click",(e)=>{
        for(let classremove of tablist)
            classremove.classList.remove("active");
        for( let tabcontent of tabcontentlist)
            tabcontent.classList.remove("show-content");
        e.target.classList.add("active");
        let show=document.getElementById(""+e.target.textContent).classList.add("show-content");
    });
}
document.querySelector(".option").addEventListener("click",function(){
    document.querySelector("nav ul").style.right="0";
})
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector("nav ul").style.right="-210px";
})
window.addEventListener("load",function(){
    document.querySelector(".preloader").style="display:none;";
})