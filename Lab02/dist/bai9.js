"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenNum = evenNum;
function evenNum(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNums = arr.filter(num => num % 2 == 0);
            resolve(evenNums);
        }, 1000);
    });
}
