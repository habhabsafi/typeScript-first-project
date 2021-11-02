
//we can declare an object by assigning properties types
// const person: {
//     name: string;
//     age:number
// } = {
// name: "safi",
//     age: 30,
// }
// but it is better to let typescript do the work

enum Status { Available, out_of_stock, onSale }
//can be customize
enum CustomizedStatus { Available = 'Available', out_of_stock = 55, onSale = 66 }
const person: {
    //since we have to determine a tupil
    //we are forced to precise all properties type 
    //including the tupil
    name: string,
    age: number,
    hobbies: string[],
    //type script supports tupil
    //tupils are length and type precised arrays
    //typescript can not differantiate between 
    //tupil and array unless we do

    role: [number, string]
    status: any
} = {
    name: "safi",
    age: 30,
    hobbies: ["reading", "coding"],
    //lets say we need a role tupil (it could be an object)
    role: [2, "author"],
    status: Status.Available
}


let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);

person.hobbies.map(c => console.log(c))
//will throw error because no nickname
//console.log(person.nickname);
//object types are written like objects

if (person.status === Status.Available) {
    console.log("Availabl")
}