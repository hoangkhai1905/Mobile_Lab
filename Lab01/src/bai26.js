"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product = void 0;
//26. Create a class Order with list of products. Add method to calculate total price.
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
var Order = /** @class */ (function () {
    function Order() {
        this.products = [];
    }
    Order.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Order.prototype.calculateTotal = function () {
        return this.products.reduce(function (total, product) { return total + product.price; }, 0);
    };
    Order.prototype.listProducts = function () {
        console.log("Products in order:");
        this.products.forEach(function (product) { return console.log("".concat(product.name, ": $").concat(product.price.toFixed(2))); });
    };
    return Order;
}());
exports.Order = Order;
