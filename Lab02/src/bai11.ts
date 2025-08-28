export async function helloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("\nBai 11: Hello Async");
        }, 2000);
    })
}

