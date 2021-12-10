const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // 새로운 방식 : `` 안에 ${변수명}을 사용하면 기존에 문자열 합치는 것과 같은 역할을 함
    // `Hello ${username}` === "Hello " + username;
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
