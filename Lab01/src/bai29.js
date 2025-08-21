"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log("Car is moving");
    };
    return Car;
}());
exports.Car = Car;
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.move = function () {
        console.log("Robot is moving");
    };
    return Robot;
}());
exports.Robot = Robot;
