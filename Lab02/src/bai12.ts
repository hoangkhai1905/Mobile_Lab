export async function simulateTaskVer2(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}