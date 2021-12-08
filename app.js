// form submit 새로고침(기본 동작)
// a href 해당 주소로 이동(기본 동작)
// 브라우저가 이벤트발생 시 onLoginSubmit(info) 실행 - info 는 이벤트 관련 정보
// function({information about the event that just happened})
// => 방금 일어난 이벤트에 대한 정보 제공
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
