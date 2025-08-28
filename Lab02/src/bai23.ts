import { Todo } from "./bai21";

export async function fetchCompletedTodos(): Promise<void> {
    
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: Todo[] = await response.json();
    const completed = todos.filter(todo => todo.completed);
    console.log(completed);
  } catch (error) {
    console.error("Error:", error);
  }
}
