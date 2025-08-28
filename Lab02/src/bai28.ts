export async function batchProcess(): Promise<void> {
    const tasks = [1,2,3,4,5].map(num => 
        new Promise<number>(resolve => setTimeout(() => resolve(num * 2), 1000))
    );;
    const results = await Promise.all(tasks)
    console.log("\nBai 28: ", results)
}