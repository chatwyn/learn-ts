"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
var User = /** @class */ (function () {
    function User(params) {
        this.name = name;
    }
    return User;
}());
exports.User = User;
var UserDB = new db_1.MysqlDb();
exports.UserDB = UserDB;
