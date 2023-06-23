const obj = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day:'numeric'
};
setInterval(() =>{
    date = new Date();
    time =  date.toLocaleTimeString();
    years = date.toLocaleDateString(undefined, obj);
    document.getElementById('time').innerHTML=time;
    document.getElementById('date').innerHTML=years;
 },1000);
