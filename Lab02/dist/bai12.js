"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTaskVer2 = simulateTaskVer2;
async function simulateTaskVer2(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
