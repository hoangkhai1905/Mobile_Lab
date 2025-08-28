"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai21_1 = require("./bai21");
const bai23_1 = require("./bai23");
const bai22_1 = require("./bai22");
const bai27_1 = require("./bai27");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
async function main() {
    await (0, bai21_1.fetchTodo)();
    await (0, bai22_1.fetchMultiTodos)();
    await (0, bai23_1.fetchCompletedTodos)();
    await (0, bai24_1.postData)();
    await (0, bai25_1.downloadFile)();
    await (0, bai26_1.waitFiveSeconds)();
    await (0, bai28_1.batchProcess)();
    await (0, bai29_1.queueProcess)();
    await (0, bai30_1.handleAllSettled)();
    await (0, bai27_1.fetchWithRetry)("https://jsonplaceholder.typicode.com/todos/1000", 3);
}
main();
