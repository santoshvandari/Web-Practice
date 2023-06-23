let menu = document.getElementById('sticky-menu');
window.addEventListener("scroll",function(){
    if(window.pageYOffset > 898 ){
        menu.classList.add('sticky');
        console.log(window.pageXOffset);
    }else{
        menu.classList.remove('sticky');
        console.log(window.pageXOffset);
    }
})