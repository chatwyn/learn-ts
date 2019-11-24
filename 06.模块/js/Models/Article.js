"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
var Article = /** @class */ (function () {
    function Article(name) {
        this.name = name;
    }
    return Article;
}());
exports.Article = Article;
var ArticleDB = new db_1.MysqlDb();
exports.ArticleDB = ArticleDB;
