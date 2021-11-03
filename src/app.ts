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

function Sum(a: Combinable, b: Combinable) {
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