const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 보여주고 숨겨줄 클래스명

function onLoginSubmit(event) {
    event.preventDefault(); // 기본 동작 멈추기
    loginForm.classList.add(HIDDEN_CLASSNAME); // 입력폼을 가리기 위해 클래스 추가
    const username = loginInput.value; // 입력받은 값을 변수로 저장
    // 유저명 기억 필요! - localStorage : mini DB 같은 역할
    // setItem, getItem, removeItem
    localStorage.setItem("username", username);
    greeting.innerHTML = `Hello ${username}`; // 변수를 이용해 문구 추가
    greeting.classList.remove(HIDDEN_CLASSNAME); // 보여주기 위해 클래스 삭제
}

loginForm.addEventListener("submit", onLoginSubmit);
