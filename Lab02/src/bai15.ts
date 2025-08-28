import { helloAsync } from "./bai11";
import { timesThree } from "./bai14";
import { getRandomNum } from "./bai4";

export async function runSequentially() {
    try {
        const random = await getRandomNum();
        console.log(random);

        const hello = await helloAsync();
        console.log(hello);

        const times3 = await timesThree(10);
        console.log(times3);

        console.log("All tasks done")
    } catch(error) {
        console.error(error)
    }
}