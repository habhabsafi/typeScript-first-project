function add(n1, n2) {
    return n1 + n2;
}
// :void and :undefined are types
function printResult(num) {
    return;
}
function printResultVoid(num) {
    console.log(num);
}
//function as type:
var combineValues;
combineValues = add;
//combinValues=printResult;
//error(invalid params and return type)
//combineValues = 5; 
//error function type not number
console.log(combineValues(8, 8));
//type function for a callbackfunction
function AddCallBack(b1, b2, cb) {
    var result = b1 + b2;
    cb(result);
}
AddCallBack(5, 6, function (result) {
    console.log(result);
});
