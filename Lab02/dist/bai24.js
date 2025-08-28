"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = postData;
async function postData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "Test Post Bai 24", userId: 100 })
        });
        const data = await response.json();
        console.log("\nBai 24 result: ", data);
    }
    catch (error) {
        console.error(error);
    }
}
