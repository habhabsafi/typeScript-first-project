// an interface describes the structor of an object
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

//use interface as a type 
let user1: Person;
user1 = {
    name: 'Max',
    age: 10,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet("hi there, i am")

//differences between interface and type
//in syntax:
type PersonType = {
    name: string,
    age: number;
    greet(phrase: string): void;
}
//types are more flexable (can have union types)
//interfaces are clearer
//interfaces are more used
//interfaces are more popular to be implemented by classes
interface Named {
    readonly name: string;
    //optional parameter
    lastname?: string;

}
//interface can inherit one or more interfaces 
interface Greetable extends Named {
    greet(phrase: string): void;
}
class Individual implements Greetable {
    name: string;
    age = 30;
    lastname?: string
    constructor(n: string, lastname?: string) {
        this.name = n;
        if (this.lastname)
            this.lastname = lastname;
    }
    greet(phrase: string) {
        console.log(phrase)
    }
}
let user2 = new Individual("Safi");
let user3: Greetable;

//interfaces can define structure of functions
//example of function type , what already learned

// type AddFn = (a: number, b: number) => number;

// let add: AddFn;

// add = (n1: number, n2: number) => {
//     return n1 + n2;
// }
//this is howe we define a function  interface 
// it is called anonymus function
interface AddFn {
    (a: number, b: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}
