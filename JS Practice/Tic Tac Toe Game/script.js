// Declearing All the Variables
let isGameOver=false;
let playerTurn='X';
let isDraw=false;
//Selecting the Elements
let BoxCollectiion = document.getElementsByClassName('box');
let TextBoxCollection = document.getElementsByClassName('text');
let GameStatus= document.getElementsByClassName('gamestatus')[0];
let lineEl=document.getElementsByClassName('line')[0];
//Music Varibles Declearation
const musicplaying= new Audio('music.mp3');
const gameover= new Audio('gameover.mp3');
const clicksound= new Audio('ting.mp3');
//Wining Combination
let wincase=[
    [0,1,2,90,90,0],
    [3,4,5,90,285,0],
    [6,7,8,90,475,0],
    [0,3,6,-98,285,90],
    [1,4,7,98,285,90],
    [2,5,8,290,285,90],
    [0,4,8,94,285,45],
    [2,4,6,94,285,135]
]
//Changing Turn of Player
const ChangePlayer=()=>{
    playerTurn=(playerTurn==='X'?'0':'X');
    if(!isGameOver)
        GameStatus.textContent=`Turn For ${playerTurn}`;
    CheckDraw()
    if(isDraw){
        GameStatus.textContent=`Game Draw!!!`;
        alert(`Game Draw!!!`)
    }
};
//checking the GameisDraw or Not
let CheckDraw=()=>{
    for (const element of TextBoxCollection) {
        if(element.textContent!='')
            isDraw=true;
    }
}
//Implement Game Win Logic
let GameWonLogic=()=>{
    wincase.forEach(e=>{
        if(TextBoxCollection[e[0]].textContent==TextBoxCollection[e[1]].textContent && TextBoxCollection[e[1]].textContent == TextBoxCollection[e[2]].textContent && TextBoxCollection[e[0]].textContent !=''){
            isGameOver=true;
            lineEl.style.transform=`translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
            lineEl.style.width=`20vw`;
            GameStatus.textContent=`${TextBoxCollection[e[0]].textContent} Won the Game!!!`;
            alert(`${TextBoxCollection[e[0]].textContent} Won the Game!!!`)
            document.getElementsByTagName('img')[0].style.width='200px';
            gameover.play();
        }
    })
}
//Adding the Event Listener in the Box
Array.from(BoxCollectiion).forEach(element=>{
    element.addEventListener('click',()=>{
        if(element.textContent=="" && isGameOver===false && isDraw==false){
            element.getElementsByClassName('text')[0].innerHTML=playerTurn;
            clicksound.play();
            ChangePlayer();
            GameWonLogic();
        }else{
            alert("This Box is Already Filled")
        }
    })
})



//Adding the Event Listener in the Reset Button
document.getElementById('reset').addEventListener('click',()=>{
    Array.from(BoxCollectiion).forEach(element=>{
        element.getElementsByClassName("text")[0].textContent="";
        document.getElementsByTagName('img')[0].style.width='0px';
        isGameOver=false;
        isDraw=false;
        lineEl.style.width=`0px`;
    })
});
