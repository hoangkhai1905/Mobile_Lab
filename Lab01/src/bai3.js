"use strict";
//3. Create a class Car with properties brand, model, year. Write a method to show car info.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.printCar = function () {
        console.log('Bai 3:' + this.brand, this.model, this.year);
    };
    return Car;
}());
exports.Car = Car;
