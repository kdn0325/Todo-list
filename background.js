const images = ["0.jpeg","1.jpeg","2.jpeg"]; //image이름이랑 똑같이 지정해야함

const choiseImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img") // script에서 HTML img 태그를 추가함

bgImage.src = `img/${choiseImage}`; //scr를 통해 이미지위치를 가져옴

document.body.appendChild(bgImage); 