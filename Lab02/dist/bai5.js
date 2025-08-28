"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = simulateTask;
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("\nBai 5: Task done");
        }, time);
    });
}
