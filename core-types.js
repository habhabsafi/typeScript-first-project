//we can declare an object by assigning properties types
// const person: {
//     name: string;
//     age:number
// } = {
// name: "safi",
//     age: 30,
// }
// but it is better to let typescript do the work
var Status;
(function (Status) {
    Status[Status["Available"] = 0] = "Available";
    Status[Status["out_of_stock"] = 1] = "out_of_stock";
    Status[Status["onSale"] = 2] = "onSale";
})(Status || (Status = {}));
//can be customize
var CustomizedStatus;
(function (CustomizedStatus) {
    CustomizedStatus["Available"] = "Available";
    CustomizedStatus[CustomizedStatus["out_of_stock"] = 55] = "out_of_stock";
    CustomizedStatus[CustomizedStatus["onSale"] = 66] = "onSale";
})(CustomizedStatus || (CustomizedStatus = {}));
var person = {
    name: "safi",
    age: 30,
    hobbies: ["reading", "coding"],
    //lets say we need a role tupil (it could be an object)
    role: [2, "author"],
    status: Status.Available
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
person.hobbies.map(function (c) { return console.log(c); });
//will throw error because no nickname
//console.log(person.nickname);
//object types are written like objects
if (person.status === Status.Available) {
    console.log("Availabl");
}
