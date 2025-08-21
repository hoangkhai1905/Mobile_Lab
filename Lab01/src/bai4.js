"use strict";
//4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return (this.width + this.height) * 2;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
