import { Todo } from "./bai21";

export async function fetchMultiTodos(): Promise<void> {
    const urls: string[] = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/3"
    ];

    try{
        const promises = urls.map((url) => {
            fetch(url)
                .then(res => res.json() as Promise<Todo>)
        })
        const todos = await Promise.all(promises);
        console.log("\nBai 22: ",todos);
    } catch(error) {
        console.error(error);
    }
}