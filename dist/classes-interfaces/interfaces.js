"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 10,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet("hi there, i am");
class Individual {
    constructor(n, lastname) {
        this.age = 30;
        this.name = n;
        if (this.lastname)
            this.lastname = lastname;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let user2 = new Individual("Safi");
let user3;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=interfaces.js.map