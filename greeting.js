const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_ADD = "hidden";
const USERNAME_KEY = "username";


function onSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_ADD);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username)
}
function paintGreeting(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_ADD);
}
loginForm.addEventListener("submit",onSubmit);

const saveUserName = localStorage.getItem(USERNAME_KEY);

if(saveUserName===null){
    loginForm.classList.remove(HIDDEN_ADD);
    loginForm.addEventListener("submit",onSubmit);
}else{
    paintGreeting(saveUserName);
}
// const logoutForm = document.querySelector("#logout"); //로그 아웃 버튼 만들어보기

// function onLogoutButton(){
//     localStorage.removeItem("username");
//     Window.location.reroad();
// }
// logoutForm.addEventListener("submit",onLogoutButton);