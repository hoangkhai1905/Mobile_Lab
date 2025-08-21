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
exports.Cat2 = exports.Dog2 = exports.Animal3 = void 0;
//19. Demonstrate method overriding using polymorphism with Animal and subclasses.
var Animal3 = /** @class */ (function () {
    function Animal3() {
    }
    Animal3.prototype.makeSound = function () {
        return "Some generic animal sound";
    };
    return Animal3;
}());
exports.Animal3 = Animal3;
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog2.prototype.makeSound = function () {
        return "Bark";
    };
    return Dog2;
}(Animal3));
exports.Dog2 = Dog2;
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat2.prototype.makeSound = function () {
        return "Meow";
    };
    return Cat2;
}(Animal3));
exports.Cat2 = Cat2;
