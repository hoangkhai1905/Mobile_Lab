export const helloPromise = new Promise((resolve) =>  {
    setTimeout(() => {
        resolve("Hello Promise");
    }, 2000);
});