"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.addEmployees = function () {
        var _a;
        var employees = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            employees[_i] = arguments[_i];
        }
        (_a = this.employees).push.apply(_a, employees);
    };
    return Department;
}());
var Facility = (function () {
    function Facility(id, name) {
        this.name = name;
        this.id = id;
    }
    Facility.prototype.describe = function () {
        console.log("facility class");
    };
    return Facility;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports.reverse()[0];
        return _this;
    }
    AccountingDepartment.logFiscalYear = function (funds) {
        console.log(AccountingDepartment.fiscalYear);
    };
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance)
            return this.instance;
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            else
                throw new Error("No report found");
        },
        set: function (value) {
            if (value)
                this.addReport(value);
            else
                throw Error("empty report");
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.mostRecentReport = text;
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "MAX")
            return;
        this.employees.push(name);
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("account department , ID: ", this.id);
    };
    AccountingDepartment.fiscalYear = 2020;
    return AccountingDepartment;
}(Department));
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "ITDepartment") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("it department...");
    };
    return ITDepartment;
}(Department));
var legalFacility = new Facility("123xxa", "Legal");
var accountingCopy = { describe: legalFacility.describe };
var ITDep = new ITDepartment("222d", ["Ali", "Safi"]);
ITDep.addEmployees("safi", "habhab");
var accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addReport("currency");
//# sourceMappingURL=classes.js.map