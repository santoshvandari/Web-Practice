imgel=document.querySelector("img");
wordsel=document.querySelector(".words");
nameel=document.querySelector(".name");
const info=[{
        photo:"img/img1.jpg",
        word:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ea eos nemo velit soluta illo unde nam itaque tenetur neque.",
        name:"Alisha Smith"
    },{
        photo:"img/img2.jpg",
        word:"Expedita maxime, voluptatum similique consectetur, earum velit minus totam inventore assumenda sit corrupti voluptates soluta quidem, labore vel dignissimos quaerat libero aliquam?",
        name:"Jonney Degan"
    },{
        photo:"img/img3.jpg",
        word:" Commodi pariatur magnam saepe ex earum nobis, sit eligendi aspernatur corporis debitis assumenda explicabo blanditiis totam expedita tenetur error, est eveniet numquam.",
        name:"Ray Baniya"
    },{
        photo:"img/img4.jpg",
        word:"Suscipit illum eveniet eos minima neque eligendi ipsam quod asperiores ex, expedita esse nemo! Asperiores.",
        name:"Santosh Bhandari"
    }];
let i=1;
setInterval(() => {
    if(i==info.length)
        i=0;
    const details=info[i];
    imgel.src=details.photo;
    wordsel.innerText=details.word;
    nameel.innerText=details.name;
    i++;
}, 10000);