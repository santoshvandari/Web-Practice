let questionwrapper = document.querySelectorAll(".question-wrapper");
questionwrapper.forEach(function(qus){
    let question=qus.querySelector(".question");
    let plus = question.querySelector(".plus");
    let minus = question.querySelector(".minus");
    plus.addEventListener("click",function(){
        qus.querySelector(".ans").classList.add("ans-show");
        plus.style.display="none";
        minus.style.display="flex";
    })
    minus.addEventListener("click",()=>{
        qus.querySelector(".ans").classList.remove("ans-show");
        plus.style.display="flex";
        minus.style.display="none";
    })
});