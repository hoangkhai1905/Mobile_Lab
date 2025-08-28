export function getRandomNum() {
    return new Promise((resolve) => {
        const random = Math.floor(Math.random() * 100);
        resolve(random);
    })
}