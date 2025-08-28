export function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("\nBai 5: Task done");
        }, time);
    });
}