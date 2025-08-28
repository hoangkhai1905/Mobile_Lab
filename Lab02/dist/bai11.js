"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloAsync = helloAsync;
async function helloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("\nBai 11: Hello Async");
        }, 2000);
    });
}
