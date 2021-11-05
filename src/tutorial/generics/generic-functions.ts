//example of built in generics
const users: Array<string> = ["Safi", "Ali"]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("10");
    }, 200)
})
promise.then(data => {
    data.toLocaleUpperCase();
})
//own generics

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
//add constraints to generic type

function assemble<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
//will cause error since 30 is not an object
//const assembledObj = merge({ name: 'Max' }, 30);

const assembledObj = merge({ name: 'Max' }, { age: 30 });
console.log({ assembledObj });
interface lengthy {
    length: number
}
interface lengthy {
    length: number
}
function countAndDescribe<T extends lengthy>(element: T): { element: T, description: string } {
    let describedText = 'element is empty';
    if (element.length > 0) {
        describedText = `element : ${element} has ${element.length} elment`
    }
    return { element: element, description: describedText }

}
function getKeyOfElement<T, u extends keyof T>(obj: T, key: u) {
    return obj[key];
}
getKeyOfElement({ name: 'safi' }, 'name');