"use strict";
//15. Create a Library class that can store Book and User objects. Add method to add books.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.User1 = exports.Book1 = void 0;
var Book1 = /** @class */ (function () {
    function Book1(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book1;
}());
exports.Book1 = Book1;
var User1 = /** @class */ (function () {
    function User1(name) {
        this.name = name;
    }
    return User1;
}());
exports.User1 = User1;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.users = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.addUser = function (user) {
        this.users.push(user);
    };
    Library.prototype.listBooks = function () {
        console.log("Books in library:");
        this.books.forEach(function (book) { return console.log("".concat(book.title, " by ").concat(book.author)); });
    };
    Library.prototype.listUsers = function () {
        console.log("Users in library:");
        this.users.forEach(function (user) { return console.log(user.name); });
    };
    return Library;
}());
exports.Library = Library;
