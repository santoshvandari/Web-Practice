var c = document.getElementById("c");
var f = document.getElementById("f");
c.addEventListener("input", () =>{
    let cval = c.value;
    let fval = (cval * 9/5)+32;
    if(!Number.isInteger(fval)){
        fval = fval.toFixed(4);
    }
    f.value = fval;
})
f.addEventListener("input",() =>{
    let fval = f.value;
    let cval = (fval - 32)* 5/9;
    if(!Number.isInteger(cval)){
        cval = cval.toFixed(4); 
    }
    c.value = cval;
})


// you can do this too.
// c.addEventListener("input",function (){
//     let cval = this.value;
//     let fval = (cval * 9/5)+32;
//     f.value = fval;
// })
// f.addEventListener("input",function (){
//     let fval = this.value;
//     let cval = (fval - 32)* 5/9;
//     c.value = cval;
// })