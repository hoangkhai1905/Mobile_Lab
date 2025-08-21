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
exports.Teacher = void 0;
//27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
var bai1_1 = require("./bai1");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.introduce = function () {
        console.log("Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old and I teach ").concat(this.subject, "."));
    };
    return Teacher;
}(bai1_1.Person));
exports.Teacher = Teacher;
