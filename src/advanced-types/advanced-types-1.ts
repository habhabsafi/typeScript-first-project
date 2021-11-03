//intersection types allow us to combine multiple types
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
//this also work 
//interface ElevatedEmployee extends Employee,Admin{}
const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create=server'],
    startDate: new Date()
}

//combine combined types
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    //this if is called type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    //privileges shows an error because emp could be an employee
    //so it may not have privilages
    //we cant use typeof as a type guard because at runtime typeof emp = 'object'
    //because typeof is used by javascript at runtime
    //employee is a custom type that isnt known by javascript
    //we can check if (emp.privileges) but typscript wont allow it 
    if ('privileges' in emp) {
        console.log("Privilages:" + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log("startDate:" + emp.startDate)
    }
}
printEmployeeInformation(e1);

//we can also use instaceOf as class type guard 

class Car {
    drive() {
        console.log("driving  Car ...")
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount: number) {
        console.log("Loading cargo..." + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(100);
    }
    //instance of way
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1)
useVehicle(v2)

//discriminated union type guard
interface Bird {
    //review below code the check why we added a literal type
    type: 'bird'
    flyingSpeed: number;
}
interface Horse {
    type: 'horse'
    runningSpeed: number;
}
type Animal = Bird | Horse;

function getAnimalSpeed(animal: Animal) {
    //this works but the more animal we have the more type checks we have to code
    //we can have typos in strings
    //we cant use instanceof bcz working with interfaces

    // if ('flyingSpeed' in animal) {
    //     console.log('Moving with speed: ' + animal.flyingSpeed);
    // }
    //the solution is to set a type or kind property for each interface
    //the property will be a literal 
    //and make a case switch
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    //best type guard for union types 
    console.log({ animalSpeed: speed })

}
getAnimalSpeed({ type: 'bird', flyingSpeed: 300 })
//some dom selectors return generic html types who dont have needed html properties
//which may cause errors
//we can cast the generic type into a specific type that we are sure of it
//let userInput = <HTMLInputElement>document.getElementById("UserInput")!
//another way which works with react
let userInput = document.getElementById("UserInput")! as HTMLInputElement
//reminder that ! means that the expression will never yield null
userInput.value = 'Hi There'

//in case we are not sure that the expression wont return null
//of course then we have to make a null check instead of !
//that means also that we can not cast before null check
let userInput2 = document.getElementById("UserInput")
if (userInput2)
    (userInput2 as HTMLInputElement).value = 'hello there'

//index types
//types that are more flexible
//in a webpage there are different forms which have different inputs/props
//we can make a single ErrorContainer for example for all forms, this error container
//defines the property times of errorObjects for example
//so i need an object that i know the value of its props but i dont know
//what are the names and the count of the props
interface ErrorContainer {
    //i should have properties regarding their count: each property's name
    // is anything that can be converted to a string
    //and value is a string
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    emai: 'Not a valid Email'
}
//function signature
//