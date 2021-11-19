// const clock = document.querySelector("h1#clock");

// function sayHello(){
//     console.log("hello")
// }

// setInterval(sayHello,5000); // 두개의 인자값을 받음

const clock = document.querySelector("h2#clock");

function getClock(){ // getClock 함수 생성
    const date = new Date(); // new Date()는 호출 하는 당시의 현재 날짜,시간을 알려줌
    const hours = String(date.getHours()).padStart(2,"0"); // getHours() 시간을 받아옴 ,Number타입으로 받아온 것을 String으로 받아옴
    const minutes = String(date.getMinutes()).padStart(2,"0"); //getMinutes() 분을 받아옴 ,Number타입으로 받아온 것을 String으로 받아옴
    const seconds = String(date.getSeconds()).padStart(2,"0"); //getSeconds() 초를 받아옴 ,Number타입으로 받아온 것을 String으로 받아옴
    clock.innerText = `${hours}:${minutes}:${seconds}`; //clock에 innerText로 넣어줬음;
}
setInterval(getClock,1000); // setInterval은 반복 실행 , 1초마다 getClock함수를 불러옴

// padStart(2,"0") 는 시작부분 자릿수 지정하고 2자리수를 "0"이라는 string문자가 추가 시켜줌 ,원하는 길이의 문자 생성가능
