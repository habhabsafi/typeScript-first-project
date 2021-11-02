const button = document.querySelector("button")! as HTMLButtonElement;

//precise type of html element bcz some html values dont have input
//const input1 = document.getElementById("num1")
//const input2 = document.getElementById("num2")

const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}
//this would throw error bcz .value returns a string
// button.addEventListener("click", function () {
//     console.log(add(input1.value, input2.value));
// });
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
