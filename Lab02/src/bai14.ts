export async function timesThree(num:number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000)
    }) 
}