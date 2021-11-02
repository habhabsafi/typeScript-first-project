
//we want to make arguments more flexible i.e not solitly to one type per argument 
function add(n1: number, n2: number) {
    return n1 + n2
}
//perhaps we want to combine strings
//we can change argument types to strings but then we wont be able
//to add numbers
//we use union types
//argument:type | type | type
//we can save union types 
//we can store union types inside a  type alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'
function combine(
    //union arguments
    input1: Combinable,
    input2: Combinable,
    //literal and union argument [for scenarion where we want to force a converion]
    //literal argument forces the argument to be assigned to a static value
    resultConversion: 'as-number' | 'as-text'
) {
    // adding directly will cause error because of type ambiguity
    //const result = input1 + input2;
    //we should add a runtime logic : type checking 
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number")
        || resultConversion === "as-number")
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString()
    //some union type arguments my need type checking but not all 
    return result;
}
console.log(combine('Max', 'Anna', 'as-text'))
console.log(combine(5, 6, 'as-text'))
console.log(combine('5', '6', 'as-number'))

//alias type can store custom object types
type userType = { name: string, age: number, }

function editUser(existingUser: userType, editedUser: userType) {
    existingUser.name = editedUser.name
    existingUser.age = editedUser.age
}
