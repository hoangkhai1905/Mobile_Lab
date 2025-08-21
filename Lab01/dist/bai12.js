"use strict";
//12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = void 0;
class Bird {
    fly() {
        console.log("fly.");
    }
}
exports.Bird = Bird;
class Fish {
    swim() {
        console.log("swim.");
    }
}
exports.Fish = Fish;
