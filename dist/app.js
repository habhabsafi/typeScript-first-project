"use strict";
var user1;
user1 = {
    name: 'Max',
    age: 10,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet("hi there, i am");
var Individual = (function () {
    function Individual(n, lastname) {
        this.age = 30;
        this.name = n;
        if (this.lastname)
            this.lastname = lastname;
    }
    Individual.prototype.greet = function (phrase) {
        console.log(phrase);
    };
    return Individual;
}());
var user2 = new Individual("Safi");
var user3;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
//# sourceMappingURL=app.js.map