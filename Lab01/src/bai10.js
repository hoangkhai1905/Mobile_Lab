"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
//10. Create a class Account with public, private and readonly fields.
var Account = /** @class */ (function () {
    function Account(accountNumber, accountName, initialBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.balance = initialBalance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
exports.Account = Account;
