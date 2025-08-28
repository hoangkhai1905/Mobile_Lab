export function evenNum(arr: number[]) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNums = arr.filter(num => num % 2 == 0)
            resolve(evenNums);
        }, 1000);
    })
}