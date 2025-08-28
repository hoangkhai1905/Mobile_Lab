import { helloPromise } from "./bai1";
import { helloAsync } from "./bai11";
import { simulateTaskVer2 } from "./bai12";
import { timesThree } from "./bai14";
import { runSequentially } from "./bai15";
import { iteratePromises } from "./bai16";
import { fetchUser } from "./bai18";
import { getNumber } from "./bai2";
import { rejectPromise } from "./bai3";
import { getRandomNum } from "./bai4";
import { simulateTask } from "./bai5";
import { evenNum } from "./bai9";
import { fetchUsers } from "./bai19";
import { fetchTodo } from "./bai21";
import { fetchMultiTodos } from "./bai22";
import { fetchCompletedTodos } from "./bai23";

//Bai 1
helloPromise.then((message) => {
    console.log("Bai 1: " + message);
})


//bai 2
getNumber().then((number) => {
    console.log("\nBai 2: " + number);
})

//bai 3 
rejectPromise()
    .then(() => {
        console.log("\nBai 3");
    })
    .catch((error) => {
        console.error(error.message);
    })


//bai 4
getRandomNum()
    .then((random) => {
        console.log("\nBai 4: " + random);
    })

//bai 5 + bai 6
Promise.all([getNumber(), getRandomNum(), simulateTask(4000)])
    .then((result) => {
        console.log("\nBai 6: All tasks completed", result);
    })
    .catch((error) => {
        console.log(error.message)
    })


//bai 7
Promise.race([getNumber(), getRandomNum(), simulateTask(500)])
    .then((result) => {
        console.log("\nBai 7: " + result);
    })

//bai 8
Promise.resolve(2)
    .then((num) => num * num)
    .then((num) => num * 2)
    .then((num) => num + 5)
    .then((result) => {
        console.log("\nBai 8: " + result)
    })

//bai 9
evenNum([1, 2, 3, 4, 5, 6])
    .then((evens) => {
        console.log("\nBai 9: " + evens);
    })

//Bai 10
//bai 5 + bai 6
Promise.all([getNumber(), getRandomNum(), simulateTask(4000)])
    .then((result) => {
        console.log("\nAll tasks completed", result);
    })
    .catch((error) => {
        console.log(error.message)
    })
    .finally(() => {
        console.log("\nBai 10: Done")
    });

//Bai 11
(async () => {
    const message = await helloAsync();
    console.log(message);
})();


//Bai 12
(async () => {
    const result = await simulateTaskVer2(3000);
    console.log("\nBai 12: " + result);
})();

//Bai 13
(async () => {
    try {
        const results = await Promise.all([
            getRandomNum(),
            simulateTaskVer2(2000),
        ]);
        console.log("\nBai 13: All tasks completed", results);
    } catch (error) {
        console.error("Error:", error);
    }
})();


//Bai 14
(async () => {
    const result = await timesThree(5);
    console.log("\nBai 14: " + result);
})();

//Bai 15
(async () => {
    console.log("\nBai 15: ");
    const result = await runSequentially();
})();

//Bai 16
Promise.all([getRandomNum(), timesThree(9), helloAsync()])
    .then((result) => {
        console.log("\nBai16: ", result);
    });

//Bai 17
(async() => {
    console.log("\nBai 17: ")
    iteratePromises();
});

//Bai 18
(async() => {
    const user = await fetchUser(1);
    console.log("\nBai 18: ", user);
})();

//Bai 19
(async() => {
    const users = await fetchUsers([10, 12, 15])
    console.log("\nBai 19: ", users);
})();

//Bai 20
(async function() {
    Promise.race([
        simulateTaskVer2(3000),
        new Promise(function(_, reject) {
            setTimeout(function() {
                reject(new Error("Timeout"))
            }, 2000)
        })
    ])
    .then(function(user) {
        console.log("\nBai 20: ", user)
    })
    .catch(function(error) {
        console.error("\nBai 20: Error:", error)
    })
})();