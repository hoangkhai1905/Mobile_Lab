"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = fetchUser;
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: `User${id}` });
        }, 1000);
    });
}
