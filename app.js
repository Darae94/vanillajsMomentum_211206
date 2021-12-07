// getElementsByClassName("hello") > 배열로 모든 클래스를 가져옴
// querySelector(".hello h1") > 해당 조건의 첫번째 태그를 가져옴
// querySelectorAll(".hello h1") > 배열로 해당 태그 정보를 가져옴
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    this.style.color = "blue";
}

function handleMouseEnter() {
    this.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    this.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handelWindowOffline() {
    alert("SOS no WIFI");
}

function handelWindowOnline() {
    alert("ALL GOOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handelWindowOffline);
window.addEventListener("online", handelWindowOnline);
