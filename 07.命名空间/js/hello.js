"use strict";
/*
typeScript中的泛型

    6.1 泛型的定义
    6.2 泛型函数
    6.3 泛型类
    6.4 泛型接口
   
*/
// any可以解决类型对的问题 但是 放弃了类型检查。  不可以指定 传入什么 返回什么
//  比如 传入number 必须返回 number类型  
// function getData(value: any): any {
//     return value;
// }
//  泛型： 可以支持不特定的数据类型     要求：传入的参数和返回的参数一致
// T表示泛型，具体什么类型是调用这个方法的时候决定的
function getData(value) {
    return value;
}
// 返回值可以改成any， 不必要跟随泛型
function getData1(value) {
    return "aaa";
}
getData(123);
// getData<number>("123");  //错误的写法
//  泛型类 
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass(); //实例化类 指定T是number
m.add(2);
m.add(24);
m.add(24);
m.add(3);
alert(m.min());
var getValue = function (value1) {
    return value1;
};
getValue("1233");
var getValue1 = function (value1) {
    return value1;
};
getValue1("11");
/*

泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)，下面我们看看把类当做参数的泛型类

1、定义个类
2、把类作为参数来约束数据传入的类型

*/
//定义操作数据库的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.updated = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb;
}());
//想给User表增加数据
// 1、定义一个User类 和数据库进行映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三';
u.pasword = '123456';
var Db = new MysqlDb();
Db.add(u);
//2、相关ArticleCate增加数据  定义一个ArticleCate类 和数据库进行映射
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
//增加操作
// var a=new ArticleCate({
//     title:'分类',
//     desc:'1111',
//     status:1
// });
// //类当做参数的泛型类
// var Db=new MysqlDb<ArticleCate>();
// Db.add(a);
//修改数据
var a = new ArticleCate({
    title: '分类111',
    desc: '2222'
});
a.status = 0;
var Db1 = new MysqlDb();
Db1.updated(a, 12);
