"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtil = void 0;
//18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.add = function (a, b) {
        return a + b;
    };
    MathUtil.subtract = function (a, b) {
        return a - b;
    };
    MathUtil.multiply = function (a, b) {
        return a * b;
    };
    MathUtil.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };
    return MathUtil;
}());
exports.MathUtil = MathUtil;
