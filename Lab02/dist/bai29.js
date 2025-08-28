"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueProcess = queueProcess;
async function queueProcess() {
    console.log("\nBai 29:");
    const tasks = [1, 2, 3, 4, 5];
    for (const num of tasks) {
        await new Promise(resolve => setTimeout(() => {
            console.log("Processed:", num);
            resolve();
        }, 1000));
    }
}
