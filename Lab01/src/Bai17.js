"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
//17. Write a singleton Logger class that logs messages to console.
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.log = function (message) {
        console.log(message);
    };
    return Logger;
}());
exports.Logger = Logger;
