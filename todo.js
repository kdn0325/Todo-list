const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos (){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)) // JSON.stringify = 값을 string으로 저장할때 사용
}

function deleteToDo(event){
    const li = event.target.parentElement; // target은 html element
    toDos=toDos.filter(toDo=>toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li") //li 태그 생성
    li.id = newTodo.id
    const span = document.createElement("span") // span 태그 생성
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span); // li안에 자식에 span태그를 넣음
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit (event){
    event.preventDefault();
    const newTodo = toDoInput.value; //  input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";
    const newTodobj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodobj);
    paintToDo(newTodobj);
    saveToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of item",item)
// }  48번째 줄 arrow function을 사용 가능

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter(){

}
[1,2,3,4].filter(sexyFilter) //filter()는 item유지를 하려면 true값을 리턴해야함 ,

sexyFilter(4);