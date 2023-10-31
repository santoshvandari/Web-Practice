console.log("hello WOrld")
// Declearing All the Variables
let isGameOver=false;
let playerTurn='X';

//Selecting the Elements
let BoxCollectiion = document.getElementsByClassName('box');
let TextBoxCollection = document.getElementsByClassName('text');
let GameStatus= document.getElementsByClassName('gamestatus')[0];

console.log(TextBoxCollection)


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
    if(!isGameOver){
        GameStatus.textContent=`Turn For ${playerTurn}`;
    }
};

//Implement Game Win Logic
let GameWonLogic=()=>{
    
    wincase.forEach(e=>{
        if(TextBoxCollection[e[0]].textContent==TextBoxCollection[e[1]].textContent && TextBoxCollection[e[1]].textContent == TextBoxCollection[e[2]].textContent && TextBoxCollection[e[0]].textContent !=''){
            isGameOver==true;
            // console.log(TextBoxCollection[e[0]].textContent+' Won Game!!!')
            GameStatus.textContent=`${playerTurn} Won the Game!!!`;

        }
    })
    
}



//Adding the Event Listener in the Box
Array.from(BoxCollectiion).forEach(element=>{
    element.addEventListener('click',()=>{
        if(element.textContent=="" && isGameOver===false){
            element.getElementsByClassName('text')[0].innerHTML=playerTurn;
            clicksound.play();
            ChangePlayer();
            GameWonLogic();
        }else{
            // alert("This Box is Already Filled")
        }
    })
})



//Adding the Event Listener in the Reset Button
document.getElementById('reset').addEventListener('click',()=>{
    Array.from(BoxCollectiion).forEach(element=>{
        element.getElementsByClassName("text")[0].textContent="";
    })
});
