"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("my name is: ".concat(this.userName, " & my age is : ").concat(this.age));
    };
    return User;
}());
exports.User = User;
// let user1 =new User('Nahid', 19)
// user1.display()
