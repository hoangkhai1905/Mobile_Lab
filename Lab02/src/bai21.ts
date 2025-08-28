export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export async function fetchTodo(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const todo: Todo = await response.json();
        console.log("\nBai 21: ", todo);
    } catch(error) {
        console.error(error);
    }
}