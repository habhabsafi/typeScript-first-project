//Optional chaining
let user = {
    name: '',
    job: {
        title: 'ceo', salary: 2000
    }
}
// let user = null

const userSafi = user?.job?.title
//its like userSafi = user&&user.job&&user.job.title?user.job.title:null
console.log({ userSafi });

//Nullish coalescing
//in case we dont now if an expression is null or undefined or empty or has a value

const username = user?.name ?? "employee"
console.log({ username })
//if user not null and user name not null or not undefinied return the name
//else return "employee"
//empty string name with be treated as a value 
// if we want to exclude empty string 
const emptyUserName = user?.name || "employee"
console.log({ emptyUserName })