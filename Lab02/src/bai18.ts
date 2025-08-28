export async function fetchUser(id:number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: `User${id}`})
        }, 1000)
    })
}