"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
function OnLoadBehavior(phrase) {
    return function (constructor) {
        const person = new constructor();
        console.log(person.name);
        console.log(phrase);
        console.log(constructor);
    };
}
function ClassTemplate(element) {
    return function (constructor) {
        let person = new constructor();
        let template = `<h1>${person.name}</h1>
        <h2>${person.lastName}</h2>
        `;
        document.querySelector(element).innerHTML = template;
    };
}
let Person = class Person {
    constructor() {
        this.name = 'safi';
        this.lastName = 'habhab';
        console.log("Creating person object....");
    }
};
Person = __decorate([
    OnLoadBehavior("Logged to Person"),
    ClassTemplate("#PersonDiv")
], Person);
//# sourceMappingURL=app.js.map