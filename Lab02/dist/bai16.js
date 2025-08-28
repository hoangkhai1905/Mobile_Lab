"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iteratePromises = iteratePromises;
function printMessage(message, time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), time);
    });
}
;
async function iteratePromises() {
    const promises = [
        printMessage("First", 1000),
        printMessage("Second", 500),
        printMessage("Third", 10)
    ];
    for await (const result of promises) {
        console.log(result);
    }
}
