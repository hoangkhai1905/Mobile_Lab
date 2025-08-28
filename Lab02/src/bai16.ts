function printMessage(message: string, time: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), time)
    })
};

export async function iteratePromises() {
    const promises = [
        printMessage("First", 1000),
        printMessage("Second", 500),
        printMessage("Third", 10)
    ];

    for await (const result of promises) {
        console.log(result);
    }
}