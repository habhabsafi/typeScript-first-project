interface userInDb {
    Name: string,
    LastName: string,
    Number: number
}
interface userDto {
    name: string,
    lastName: string,
    number: number
}

function parseUser(user: userInDb): userDto {
    let parsedUser: Partial<userDto> = {};
    parsedUser.name = user.Name;
    parsedUser.lastName = user.LastName;
    parsedUser.number = user.Number;
    return parsedUser as userDto
}
console.log(parseUser({ Name: 'safi', LastName: '', Number: 3 }))
//readonly 

const names: Readonly<string[]> = ['Max', 'Anna'];
//will cause error because of readonly
//names.push('Manu')

