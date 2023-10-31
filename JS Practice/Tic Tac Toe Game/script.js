console.log("hello WOrld")
// Declearing All the Variables
let isGameOver=false;
let playerTurn='X';


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


setInterval(function(){
    ChangePlayer();
    console.log(playerTurn)
}
,1000)


//Adding the Event Listener in the Box
let BoxCollectiion = document.getElementsByClassName('box');
Array.from(BoxCollectiion).forEach(element=>{
    let boxtext=element.getElementsByClassName('boxtext')[0];
    element.addEventListener
})