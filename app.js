// getElementsByClassName("hello") > 배열로 모든 클래스를 가져옴
// querySelector(".hello h1") > 해당 조건의 첫번째 태그를 가져옴
// querySelectorAll(".hello h1") > 배열로 해당 태그 정보를 가져옴
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    const currentColor = this.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    this.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);
