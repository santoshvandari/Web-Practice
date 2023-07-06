let date=new Date("2024");
console.log(date)
let second=date.getTime();
let datetime=Math.floor(second/1000);
var flipdown = new FlipDown(datetime);
flipdown.start();
flipdown.ifEnded(() => {
    alert("Happy New Year!!!");
  });