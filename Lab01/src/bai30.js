"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
var School = /** @class */ (function () {
    function School() {
        this.students = [];
        this.teachers = [];
    }
    School.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    School.prototype.addTeacher = function (teacher) {
        this.teachers.push(teacher);
    };
    School.prototype.displayInfo = function () {
        console.log("Students:");
        this.students.forEach(function (student) { return student.introduce(); });
        console.log("Teachers:");
        this.teachers.forEach(function (teacher) { return teacher.introduce(); });
    };
    return School;
}());
exports.School = School;
