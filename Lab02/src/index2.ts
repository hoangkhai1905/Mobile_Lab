import { fetchTodo } from "./bai21";
import { fetchCompletedTodos } from "./bai23";
import { fetchMultiTodos } from "./bai22";
import { fetchWithRetry } from "./bai27";
import { postData } from "./bai24";
import { downloadFile } from "./bai25";
import { waitFiveSeconds } from "./bai26";
import { batchProcess } from "./bai28";
import { queueProcess } from "./bai29";
import { handleAllSettled } from "./bai30";

async function main(): Promise<void> {
    await fetchTodo();
    await fetchMultiTodos();
    await fetchCompletedTodos();
    await postData();
    await downloadFile();
    await waitFiveSeconds();
    await batchProcess();
    await queueProcess();
    await handleAllSettled();
    await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1000", 3);
}

main();