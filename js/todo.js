const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerHTML = newTodo.text;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) { // todo 리스트 내용이 있으면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 저장된값도 불러와서 사용
    parsedToDos.forEach(paintToDo); // 저장된 값 보여주기
}

function sexyFilter() {

}

// [1, 2, 3, 4].filter(sexyFilter)
// return true의 경우 해당 값 유지
// sexyFilter(1) = 1
// sexyFilter(2) = 2
// sexyFilter(3) x
// sexyFilter(4) = 4