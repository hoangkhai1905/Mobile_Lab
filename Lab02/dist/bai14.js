"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timesThree = timesThree;
async function timesThree(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
