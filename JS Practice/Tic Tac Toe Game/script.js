console.log("hello WOrld")
// Declearing All the Variables
let isGameOver=false;
let playerTurn='X';

//Selecting the Elements
let BoxCollectiion = document.getElementsByClassName('box');
let TextBoxCollection = document.getElementById('text');



//Music Varibles Declearation
const musicplaying= new Audio('music.mp3');
const gameover= new Audio('gameover.mp3');
const clicksound= new Audio('ting.mp3');
//Wining Combination
let wincase=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


//Changing Turn of Player
const ChangePlayer=()=>{
    playerTurn=(playerTurn==='X'?'0':'X');
};


// setInterval(function(){
//     ChangePlayer();
//     console.log(playerTurn)
// }
// ,1000)


//Adding the Event Listener in the Box
Array.from(BoxCollectiion).forEach(element=>{
    element.addEventListener('click',()=>{
        if(element.textContent==""){
            console.log(element.innerHTML)
            console.log(element.getElementsByClassName('text'))
            console.log("This Box is Empty")
            // boxtext.textContent=playerTurn;
            element.getElementsByClassName('text')[0].innerHTML=playerTurn;

            // clicksound.play();
            ChangePlayer();
        }else{
            console.log("This Box is Already Filled")
        }
    })
})



//Adding the Event Listener in the Reset Button
document.getElementById('reset').addEventListener('click',()=>{
    Array.from(BoxCollectiion).forEach(element=>{
        // element.textContent="";
        element.getElementsByClassName("text").textContent="";
    })
});
