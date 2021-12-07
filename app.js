// typeof 해당 데이터의 타입 확인
// parseInt => 스트링을 숫자로 변환
// isNaN => 숫자가 아닌지 확인해서 true, false return!
const age = parseInt(prompt("How old are you?"));

// OR
// true || true === true
// true || false === true
// false || true === true
// false || false === false
// AND
// true && true === true
// true && false === false
// false && true === false
// false && false === false

if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if(age > 50 && age <= 80) {
    console.log("You should exercise!");
} else if(age == 100) {
    console.log("Wow you are wise")
} else if(age > 80) {
    console.log("You can do whatever you want.");
}

if((a && b) || (c && d) || (x || w)) {
    
}