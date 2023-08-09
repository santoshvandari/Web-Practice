"use strict";
// Selecting the Necessary Elements 
let PlayPauseBtn=document.querySelector("#playpause");
let SongItemCollection=document.querySelector(".SongItemCollection");
let CurrentSongNameEl = document.getElementById("CurrentSongName");
let nextEl=document.getElementById("next");
let previousEl=document.getElementById("previous");
let gif=document.querySelector(".gif");
let progressBarEl=document.querySelector("#progressBar");

// Making THe NEcessary Global Varibales 
let index=0;
let currentTime=0;
let Music=new Audio(`songs/1.mp3`);

//Collection of Song Items
let songList=[
    {song:"songs/1.mp3",name:"Chandni Sachet Tandon",cover:"covers/1.jpg"},
    {song:"songs/2.mp3",name:"Dhindhora Baje Re Rocky",cover:"covers/2.jpg"},
    {song:"songs/3.mp3",name:"Dil Bechara Neha Kakkar",cover:"covers/3.jpg"},
    {song:"songs/4.mp3",name:"Dilon Ki Doriyan Bawaal",cover:"covers/4.jpg"},
    {song:"songs/5.mp3",name:"Zinda Banda Jawan",cover:"covers/5.jpg"},
]

// Adding the Collection Of Song Items in HTML 
for (const i of songList) {
    let html= `<div class="songItem">
    <img id="cover" src="${i.cover}">
    <p id="songName">${i.name}</p>
    <i class="bi bi-play-btn"></i>
</div>     `
    SongItemCollection.insertAdjacentHTML("beforeend",html)
    
}

// function for creating a new music file 
let NewMusicEl=(i)=>{
    Music=new Audio(""+songList[i].song);    
}

// function that play music 
let PlayMusic=(i,ct)=>{
    PauseMusic();
    NewMusicEl(index);
    CurrentSongNameEl.textContent=songList[i].name;
    Music.currentTime=ct;
    Music.play();
    PlayPauseBtn.classList.add("bi-pause-btn");
    PlayPauseBtn.classList.remove("bi-play-btn");
    SongButtons[i].classList.add("bi-pause-btn");
    SongButtons[i].classList.remove("bi-play-btn");
    UpdateProgressBar();
    gif.style.opacity=1;
}

// function that pause music 
let PauseMusic=()=>{
    Music.pause();
    PlayPauseBtn.classList.remove("bi-pause-btn");
    PlayPauseBtn.classList.add("bi-play-btn");
    gif.style.opacity=0;
    for(let song of SongButtons){
        song.classList.add("bi-play-btn");
        song.classList.remove("bi-pause-btn");
    }
}

// function that play next music 
let NextMusicPlay=()=>{
    if(index===songList.length-1){
        index=0;
    }else{
        index++;
    }
    currentTime=0;
    PlayMusic(index,currentTime);
}

// Adding the Event Listeners on Music List Btn
let SongButtons = document.querySelectorAll('.songItem .bi');
SongButtons.forEach(function(element,i){
    PauseMusic();
    element.addEventListener('click',function(){
        PauseMusic();
        index=i;
        if(Music.paused){
            console.log("Music is Paused and Now Playing");
            PlayMusic(i,currentTime);
         
        }else{
            PauseMusic();
        }  
    });
});

/*--------------Function of Prograss Bar also Completed------------------*/ 
// Sync the Progress Bar according to music
let UpdateProgressBar=()=>{
    let value = 0.00;
    Music.addEventListener("timeupdate",function(){
        if(Music.currentTime==Music.duration){
            NextMusicPlay();
        }
        value=((Music.currentTime/Music.duration)*100).toFixed(1);
        progressBarEl.value=value;
    })
}
// Play the Music accoring to chnage in Prograss Bar
progressBarEl.addEventListener("change",function(){
    currentTime=Math.floor(progressBarEl.value*Music.duration/100);
    console.log(currentTime);
    PlayMusic(index,currentTime);
})

// Button Event Listener Working well 
// PlayPauseFunction 
PlayPauseBtn.addEventListener("click",function(){
    if(Music.paused){
        PlayMusic(index,currentTime);
    }else{
      PauseMusic();
    }
});
// For Next Button 
nextEl.addEventListener("click",NextMusicPlay);
// For PRevious Button 
previousEl.addEventListener("click",function(){
    if(index===0){
        index=songList.length-1;
    }else{
        index--;
    }
    currentTime=0;
    PlayMusic(index,currentTime);
})