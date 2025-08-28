"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTodo = fetchTodo;
async function fetchTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const todo = await response.json();
        console.log("\nBai 21: ", todo);
    }
    catch (error) {
        console.error(error);
    }
}
