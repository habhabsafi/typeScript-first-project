//do not set type of variables of function if there is no specific reason
type numbersArgs = { n1: number, n2: number };
function add(n1: number, n2: number) {
    return n1 + n2;
}
// :void and :undefined are types
function printResult(num: number): undefined {
    return
}
function printResultVoid(num: number): void {
    console.log(num)
}
//function as type:
let combineValues: (a1: number, a2: number) => number
combineValues = add;
//combinValues=printResult;
//error(invalid params and return type)
//combineValues = 5; 
//error function type not number
console.log(combineValues(8, 8));

//type function for a callbackfunction

function AddCallBack(b1: number, b2: number, cb: (num: number) => void) {
    const result = b1 + b2;
    cb(result);
}
AddCallBack(5, 6, (result) => {
    console.log(result);
})