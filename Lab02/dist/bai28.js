"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProcess = batchProcess;
async function batchProcess() {
    const tasks = [1, 2, 3, 4, 5].map(num => new Promise(resolve => setTimeout(() => resolve(num * 2), 1000)));
    ;
    const results = await Promise.all(tasks);
    console.log("\nBai 28: ", results);
}
