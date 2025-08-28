"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai18_1 = require("./bai18");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai9_1 = require("./bai9");
const bai19_1 = require("./bai19");
//Bai 1
bai1_1.helloPromise.then((message) => {
    console.log("Bai 1: " + message);
});
//bai 2
(0, bai2_1.getNumber)().then((number) => {
    console.log("\nBai 2: " + number);
});
//bai 3 
(0, bai3_1.rejectPromise)()
    .then(() => {
    console.log("\nBai 3");
})
    .catch((error) => {
    console.error(error.message);
});
//bai 4
(0, bai4_1.getRandomNum)()
    .then((random) => {
    console.log("\nBai 4: " + random);
});
//bai 5 + bai 6
Promise.all([(0, bai2_1.getNumber)(), (0, bai4_1.getRandomNum)(), (0, bai5_1.simulateTask)(4000)])
    .then((result) => {
    console.log("\nBai 6: All tasks completed", result);
})
    .catch((error) => {
    console.log(error.message);
});
//bai 7
Promise.race([(0, bai2_1.getNumber)(), (0, bai4_1.getRandomNum)(), (0, bai5_1.simulateTask)(500)])
    .then((result) => {
    console.log("\nBai 7: " + result);
});
//bai 8
Promise.resolve(2)
    .then((num) => num * num)
    .then((num) => num * 2)
    .then((num) => num + 5)
    .then((result) => {
    console.log("\nBai 8: " + result);
});
//bai 9
(0, bai9_1.evenNum)([1, 2, 3, 4, 5, 6])
    .then((evens) => {
    console.log("\nBai 9: " + evens);
});
//Bai 10
//bai 5 + bai 6
Promise.all([(0, bai2_1.getNumber)(), (0, bai4_1.getRandomNum)(), (0, bai5_1.simulateTask)(4000)])
    .then((result) => {
    console.log("\nAll tasks completed", result);
})
    .catch((error) => {
    console.log(error.message);
})
    .finally(() => {
    console.log("\nBai 10: Done");
});
//Bai 11
(async () => {
    const message = await (0, bai11_1.helloAsync)();
    console.log(message);
})();
//Bai 12
(async () => {
    const result = await (0, bai12_1.simulateTaskVer2)(3000);
    console.log("\nBai 12: " + result);
})();
//Bai 13
(async () => {
    try {
        const results = await Promise.all([
            (0, bai4_1.getRandomNum)(),
            (0, bai12_1.simulateTaskVer2)(2000),
        ]);
        console.log("\nBai 13: All tasks completed", results);
    }
    catch (error) {
        console.error("Error:", error);
    }
})();
//Bai 14
(async () => {
    const result = await (0, bai14_1.timesThree)(5);
    console.log("\nBai 14: " + result);
})();
//Bai 15
(async () => {
    console.log("\nBai 15: ");
    const result = await (0, bai15_1.runSequentially)();
})();
//Bai 16
Promise.all([(0, bai4_1.getRandomNum)(), (0, bai14_1.timesThree)(9), (0, bai11_1.helloAsync)()])
    .then((result) => {
    console.log("\nBai16: ", result);
});
//Bai 17
(async () => {
    console.log("\nBai 17: ");
    (0, bai16_1.iteratePromises)();
});
//Bai 18
(async () => {
    const user = await (0, bai18_1.fetchUser)(1);
    console.log("\nBai 18: ", user);
})();
//Bai 19
(async () => {
    const users = await (0, bai19_1.fetchUsers)([10, 12, 15]);
    console.log("\nBai 19: ", users);
})();
//Bai 20
(async function () {
    Promise.race([
        (0, bai12_1.simulateTaskVer2)(3000),
        new Promise(function (_, reject) {
            setTimeout(function () {
                reject(new Error("Timeout"));
            }, 2000);
        })
    ])
        .then(function (user) {
        console.log("\nBai 20: ", user);
    })
        .catch(function (error) {
        console.error("\nBai 20: Error:", error);
    });
})();
