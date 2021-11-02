//we want to make arguments more flexible i.e not solitly to one type per argument 
function add(n1, n2) {
    return n1 + n2;
}
function combine(
//union arguments
input1, input2, 
//literal and union argument [for scenarion where we want to force a converion]
//literal argument forces the argument to be assigned to a static value
resultConversion) {
    // adding directly will cause error because of type ambiguity
    //const result = input1 + input2;
    //we should add a runtime logic : type checking 
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number")
        || resultConversion === "as-number")
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString();
    //some union type arguments my need type checking but not all 
    return result;
}
console.log(combine('Max', 'Anna', 'as-text'));
console.log(combine(5, 6, 'as-text'));
console.log(combine('5', '6', 'as-number'));
