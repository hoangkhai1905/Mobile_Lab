import { fetchUser } from "./bai18";

export async function fetchUsers(ids:number[]): Promise<{id:string}[]> {
    const users: {id: string}[] = [];

    for(const id of ids) {
        const user = await fetchUser(id) as {id: string};
        users.push(user)
    }
    return users;
}