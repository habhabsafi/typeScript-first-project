
//set type of arguments
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult)
        console.log(phrase + result)
    else
        return n1 + n2
}
//we can define var like this
// let number1:number = 5; but this is redundant
let number1 = 5;
const number2 = 2.8;
const printResult = true;
let phrase = "this result is ";
//phrase = 100 ; will throw error because of type change

add(number1, number2, printResult, phrase)
