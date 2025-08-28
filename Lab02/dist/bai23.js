"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCompletedTodos = fetchCompletedTodos;
async function fetchCompletedTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();
        const completed = todos.filter(todo => todo.completed);
        console.log(completed);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
