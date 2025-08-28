"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMultiTodos = fetchMultiTodos;
async function fetchMultiTodos() {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/3"
    ];
    try {
        const promises = urls.map((url) => {
            fetch(url)
                .then(res => res.json());
        });
        const todos = await Promise.all(promises);
        console.log("\nBai 22: ", todos);
    }
    catch (error) {
        console.error(error);
    }
}
