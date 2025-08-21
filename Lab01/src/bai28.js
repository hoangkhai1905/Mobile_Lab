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
exports.Cat1 = exports.Dog1 = exports.Animal1 = void 0;
//28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.makeSound = function () {
        return "Some generic animal sound";
    };
    return Animal1;
}());
exports.Animal1 = Animal1;
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.makeSound = function () {
        return "Bark";
    };
    return Dog1;
}(Animal1));
exports.Dog1 = Dog1;
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat1.prototype.makeSound = function () {
        return "Meow";
    };
    return Cat1;
}(Animal1));
exports.Cat1 = Cat1;
