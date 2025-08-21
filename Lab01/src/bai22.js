"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
//22. Create a class Stack with push, pop, peek, isEmpty methods.
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Stack;
}());
exports.Stack = Stack;
