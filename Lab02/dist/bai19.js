"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = fetchUsers;
const bai18_1 = require("./bai18");
async function fetchUsers(ids) {
    const users = [];
    for (const id of ids) {
        const user = await (0, bai18_1.fetchUser)(id);
        users.push(user);
    }
    return users;
}
