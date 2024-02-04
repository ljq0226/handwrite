// function interval() {
//   setTimeout(() => {
//     console.log(1)
//     interval()
//   }, 1000)
// }
function processInput(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input * 2;
    }
}
var result1 = processInput("hello"); // result1 的类型为 string
var result2 = processInput(10); // result2 的类型为 number
