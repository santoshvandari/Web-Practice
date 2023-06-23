const newYear = '1 January 2024 0:0:0';
const newYearDate = new Date(newYear);
setInterval(() => {
    const currentDate = new Date();
    const diff = Math.floor((newYearDate-currentDate)/1000);
    let day = Math.floor((diff/3600)/24);
    let hrs = Math.floor((diff/3600)%24);
    let mins = Math.floor((diff%3600)/60);
    let sec = Math.floor((diff%3600)%60);
    if(day<10){
        day = '0'+ day ;
    }    if(hrs<10){
    hrs = '0'+ hrs ;
    }    if(mins<10){
    mins = '0'+ mins ;
    }if(sec<10){
    sec = '0'+ sec ;
    }
    days.innerHTML = day;
    hours.innerHTML = hrs;
    minutes.innerHTML= mins;
    seconds.innerHTML = sec;
    if(diff < 0){
        document.querySelector('main').style.display='none';
        document.querySelector(".newYearWish").style.display = 'block';
        clearInterval();
    }
}, 1000)