"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployees(...employees) {
        this.employees.push(...employees);
    }
}
class Facility {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log("facility class");
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports.reverse()[0];
    }
    static logFiscalYear(funds) {
        console.log(AccountingDepartment.fiscalYear);
    }
    static getInstance() {
        if (AccountingDepartment.instance)
            return this.instance;
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    set mostRecentReport(value) {
        if (value)
            this.addReport(value);
        else
            throw Error("empty report");
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        else
            throw new Error("No report found");
    }
    addReport(text) {
        this.reports.push(text);
        this.mostRecentReport = text;
    }
    addEmployee(name) {
        if (name === "MAX")
            return;
        this.employees.push(name);
    }
    describe() {
        console.log("account department , ID: ", this.id);
    }
}
AccountingDepartment.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "ITDepartment");
        this.admins = admins;
    }
    describe() {
        console.log("it department...");
    }
}
var legalFacility = new Facility("123xxa", "Legal");
let accountingCopy = { describe: legalFacility.describe };
const ITDep = new ITDepartment("222d", ["Ali", "Safi"]);
ITDep.addEmployees("safi", "habhab");
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addReport("currency");
//# sourceMappingURL=classes.js.map