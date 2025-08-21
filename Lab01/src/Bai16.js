"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
//16. Create a generic class Box that can store any type of value.
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    Box.prototype.setValue = function (value) {
        this.value = value;
    };
    return Box;
}());
exports.Box = Box;
