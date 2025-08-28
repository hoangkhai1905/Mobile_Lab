"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSequentially = runSequentially;
const bai11_1 = require("./bai11");
const bai14_1 = require("./bai14");
const bai4_1 = require("./bai4");
async function runSequentially() {
    try {
        const random = await (0, bai4_1.getRandomNum)();
        console.log(random);
        const hello = await (0, bai11_1.helloAsync)();
        console.log(hello);
        const times3 = await (0, bai14_1.timesThree)(10);
        console.log(times3);
        console.log("All tasks done");
    }
    catch (error) {
        console.error(error);
    }
}
