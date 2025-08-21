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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
//14. Create a base class Employee. Extend Manager and Developer with specific methods.
var Employee = /** @class */ (function () {
    function Employee(name, position) {
        this.name = name;
        this.position = position;
    }
    Employee.prototype.getInfo = function () {
        return "".concat(this.name, " is a ").concat(this.position);
    };
    return Employee;
}());
exports.Employee = Employee;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name, "Manager") || this;
    }
    Manager.prototype.manage = function () {
        console.log("".concat(this.name, " is managing the team."));
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name) {
        return _super.call(this, name, "Developer") || this;
    }
    Developer.prototype.code = function () {
        console.log("".concat(this.name, " is writing code."));
    };
    return Developer;
}(Employee));
exports.Developer = Developer;
