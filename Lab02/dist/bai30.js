"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAllSettled = handleAllSettled;
async function handleAllSettled() {
    console.log("\nBai 30");
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/1000",
        "https://jsonplaceholder.typicode.com/todos/2"
    ];
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const results = await Promise.allSettled(promises);
    results.forEach((result, idx) => {
        if (result.status === "fulfilled") {
            console.log(`URL ${urls[idx]} success:`, result.value);
        }
        else {
            console.log(`URL ${urls[idx]} failed:`, result.reason);
        }
    });
}
