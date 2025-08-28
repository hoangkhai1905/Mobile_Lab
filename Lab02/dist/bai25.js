"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = downloadFile;
async function downloadFile() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("\nBai 25: File downloaded");
}
