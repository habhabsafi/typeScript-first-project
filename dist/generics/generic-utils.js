"use strict";
function parseUser(user) {
    let parsedUser = {};
    parsedUser.name = user.Name;
    parsedUser.lastName = user.LastName;
    parsedUser.number = user.Number;
    return parsedUser;
}
console.log(parseUser({ Name: 'safi', LastName: '', Number: 3 }));
const names = ['Max', 'Anna'];
//# sourceMappingURL=generic-utils.js.map