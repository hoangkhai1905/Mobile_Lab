"use strict";
//12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("fly.");
    };
    return Bird;
}());
exports.Bird = Bird;
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("swim.");
    };
    return Fish;
}());
exports.Fish = Fish;
