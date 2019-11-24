"use strict";
// 1.接口 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printName(name) {
    // 必须传入对象  firstname  和 secondName
    console.log(name.firstName + "--" + name.secondeName);
}
function printInfo(info) {
    console.log(info.firstName + "--" + info.secondeName + "--" + info.age);
}
var obj = {
    age: 20,
    firstName: "aa",
    secondeName: "ccc"
};
printInfo(obj);
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("成功");
            if (config.dataTyoe == "json") {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: "get",
    data: "name:张三",
    url: "http://a.itying.com/api/productlist",
    dataTyoe: "json"
});
// 方法 必须符合接口
var md5 = function (key, value) {
    return key + value;
};
var sha1 = function (key, value) {
    return key + value;
};
console.log(md5("name", "张三"));
console.log(sha1("name", "张三"));
//  可索引接口 ，数组、对象的约束
var arr = [333, 344];
var arr1 = ["111", "222"];
var arr2 = ["aaa", "vvv"];
var obect = {
    name: "20",
    age: "32"
};
// 使用 implements 实现 接口
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name);
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food) {
        console.log(this.name);
    };
    return Cat;
}());
var d = new Dog("ssaaaaas");
d.eat();
var c = new Cat("xiaohua");
c.eat("a");
var programmer = /** @class */ (function () {
    function programmer(name) {
        this.name = name;
    }
    programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.study = function () {
    };
    Web.prototype.eat = function (str) {
    };
    return Web;
}(programmer));
var w = new Web("aa");
w.coding("前端");
