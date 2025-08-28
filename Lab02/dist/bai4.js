"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNum = getRandomNum;
function getRandomNum() {
    return new Promise((resolve) => {
        const random = Math.floor(Math.random() * 100);
        resolve(random);
    });
}
