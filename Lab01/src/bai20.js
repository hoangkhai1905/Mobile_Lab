"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.Car1 = void 0;
var Car1 = /** @class */ (function () {
    function Car1() {
    }
    Car1.prototype.start = function () {
        console.log("Car is starting");
    };
    Car1.prototype.stop = function () {
        console.log("Car is stopping");
    };
    Car1.prototype.getInfo = function () {
        return "This is a car";
    };
    return Car1;
}());
exports.Car1 = Car1;
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.start = function () {
        console.log("Bike is starting");
    };
    Bike.prototype.stop = function () {
        console.log("Bike is stopping");
    };
    Bike.prototype.getInfo = function () {
        return "This is a bike";
    };
    return Bike;
}());
exports.Bike = Bike;
