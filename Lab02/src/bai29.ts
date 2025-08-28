export async function queueProcess(): Promise<void> {
    console.log("\nBai 29:");
    const tasks = [1, 2, 3, 4, 5];
    for (const num of tasks) {
        await new Promise<void>(resolve => setTimeout(() => {
            console.log("Processed:", num);
            resolve();
        }, 1000));
    }
}