"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWithRetry = fetchWithRetry;
async function fetchWithRetry(url, retries) {
    for (let i = 0; i <= retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok)
                throw new Error("Cant fetch");
            return await response.json();
        }
        catch (error) {
            if (i === retries)
                throw error;
            console.log(`Retry ${i + 1}...`);
        }
    }
}
