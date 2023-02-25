const date=new Date();
document.querySelector(".months").innerText=date.toLocaleString("en",{month:"long"});
document.querySelector(".day").innerText=date.toLocaleString("en",{weekday:"long"});
document.querySelector(".date").innerText=date.getDate();
document.querySelector(".year").innerText=date.getFullYear();
