"use strict";
const users = ["Safi", "Ali"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("10");
    }, 200);
});
promise.then(data => {
    data.toLocaleUpperCase();
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
function assemble(objA, objB) {
    return Object.assign(objA, objB);
}
const assembledObj = merge({ name: 'Max' }, { age: 30 });
console.log({ assembledObj });
function countAndDescribe(element) {
    let describedText = 'element is empty';
    if (element.length > 0) {
        describedText = `element : ${element} has ${element.length} elment`;
    }
    return { element: element, description: describedText };
}
function getKeyOfElement(obj, key) {
    return obj[key];
}
getKeyOfElement({ name: 'safi' }, 'name');
//# sourceMappingURL=generic-functions.js.map