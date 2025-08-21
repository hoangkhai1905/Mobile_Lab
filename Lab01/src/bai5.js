"use strict";
//5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (money) {
        console.log("Balance: " + this.balance);
        this.balance += money;
        console.log("Balance: " + this.balance + '(+' + money + ')');
    };
    BankAccount.prototype.withdraw = function (money) {
        console.log("Balance: " + this.balance);
        this.balance -= money;
        console.log("Balance: " + this.balance + '(-' + money + ')');
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
