"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitFiveSeconds = waitFiveSeconds;
async function waitFiveSeconds() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("\nBai 26: 5 seconds passed!");
}
