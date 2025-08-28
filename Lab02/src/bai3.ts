export function rejectPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("\nBai 3: Something went wrong"))
        }, 1000);
    });
}