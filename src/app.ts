//decorators are all about classes
//decorator is not just a function
//usually decorators are written in pascal case
//decorators recieve arguments, how many ? depends on where you use decorators
//decorators are executed when the class is defined and not when initiated

//not the only way we can create a decorator
//the problem in  decorator that it can only accept one argument 
//when pointed above the class which will be the constructor of the class
function Logger(constructor: Function) {
    console.log("Logging...")
    console.log(constructor);
}
//in case we want to customize 
//we create a decorator factory

function OnLoadBehavior(phrase: string) {
    //inner decorator function
    return function (constructor: any) {
        const person = new constructor()
        console.log(person.name)
        console.log(phrase);
        console.log(constructor);
    }
}
function ClassTemplate(element: string) {
    return function (constructor: any) {
        let person = new constructor();

        let template = `<h1>${person.name}</h1>
        <h2>${person.lastName}</h2>
        `
        document.querySelector(element)!.innerHTML = template;

    }
}
//@ points at the decorator
//@Logger
@OnLoadBehavior("Logged to Person")
@ClassTemplate("#PersonDiv")
class Person {
    name = 'safi';
    lastName = 'habhab';

    constructor() {
        console.log("Creating person object....")
    }
}

// const person = new Person();

// console.log(person);