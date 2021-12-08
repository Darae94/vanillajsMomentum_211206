// form submit 새로고침이 기본 동작임
// 브라우저가 이벤트발생 시 onLoginSubmit(info) 실행 - info 는 이벤트 관련 정보
// 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
