"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
//17. Write a singleton Logger class that logs messages to console.
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(message);
    }
}
exports.Logger = Logger;
