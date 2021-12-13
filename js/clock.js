const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// setInterval -> 5초 마다 반복
// setTimeout -> 5초 뒤 동작
setTimeout(sayHello, 5000);