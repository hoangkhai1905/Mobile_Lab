"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
//21. Create a generic Repository class with methods add(), getAll().
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
exports.Repository = Repository;
