
abstract class Department {
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
    }

    //if we want a method to be forcely overrident bu subclasses
    //we clear the body of the function and we prefix it with abstract keyword
    //it was like this
    // describe() {
    //     console.log(" department , ID: ", this.id)
    // }
    //but now:
    abstract describe(this: Department): void

    addEmployees(...employees: string[]) {
        this.employees.push(...employees);
    }
}
//another way to initialize props
class Facility {
    public name: string;
    private readonly id: string;
    constructor(id: string, name: string) {
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log("facility class")
    }
}
class AccountingDepartment extends Department {
    /**
     *static
     */
    static fiscalYear = 2020;
    static logFiscalYear(funds: number) {
        console.log(AccountingDepartment.fiscalYear)
    }
    //signlton concept: force a class to only produce a single instance
    //to do that we make the constructor private
    //the we add a static instance that is of type of the class
    //we add a method to get the instace
    private static instance: AccountingDepartment
    static getInstance() {
        if (AccountingDepartment.instance)
            return this.instance;
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    private lastReport: string;
    //we use getters and setters to assign and fetch props and complexity is needed
    //we casses getters and setters like props even though they are funcitons
    set mostRecentReport(value: string) {
        if (value)
            this.addReport(value)
        else
            throw Error("empty report")
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport
        else
            throw new Error("No report found")
    }
    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports.reverse()[0]
    }
    addReport(text: string) {
        this.reports.push(text)
        this.mostRecentReport = text
    }
    //overriding
    addEmployee(name: string) {
        if (name === "MAX")
            return;
        this.employees.push(name);
    }
    describe() {
        console.log("account department , ID: ", this.id)
    }
}
class ITDepartment extends Department {
    /**
     *
     */
    describe() {
        console.log("it department...")
    }
    constructor(id: string, public admins: string[]) {
        super(id, "ITDepartment");

    }
}

var legalFacility = new Facility("123xxa", "Legal");

let accountingCopy = { describe: legalFacility.describe }
//will cause error because of this:Department ; accountingCopy dont have a name
//accountingCopy.describe();
//let accountingCopy = { name: "Accounting", describe: accounting.describe }
//this wil work
//accountingCopy.describe();

const ITDep = new ITDepartment("222d", ["Ali", "Safi"]);
ITDep.addEmployees("safi", "habhab")
//before making the accounting department a singleton
//const accountingDepartment = new AccountingDepartment("22x2d", ["median", "balance"]);
//after making the accounting department a singleton
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addReport("currency")
// console.log(accountingDepartment.)



