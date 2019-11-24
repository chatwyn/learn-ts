"use strict";
//  ts中类
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
/*
    类中的修饰符   属性和方法都有
    public：共有        那那都可访问
    protocted:保护   本类和子类可以访问，  在类外部没发访问
    private:私有   只有在本类可以访问，  子类和外部没法访问
*/
var Person = /** @class */ (function () {
    function Person(name, a) {
        this.name = name;
        this.a = a;
        this.b = "aa";
    }
    Person.prototype.run = function () {
        alert(this.name + "在运动");
    };
    Person.prototype.aaa = function () {
    };
    Person.print = function () {
        alert("静态方法" + this.sex);
    };
    Person.sex = "dd"; // 静态属性
    return Person;
}());
// Person.print();  //调用静态方法
// var p = new Person("ee", "aa")
// p.run()
// 继承,  extends super
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name, a) {
        return _super.call(this, name, a) || this;
    }
    Web.prototype.work = function () {
        alert(this.name + this.a + "在工作");
    };
    Web.prototype.run = function () {
        // super.run()  调用父类的方法  
        alert(this.name + "在运动  子类");
    };
    return Web;
}(Person));
// var w = new Web("s", "a")
// w.run()
// w.work()
//  抽象类，提供其他类的继承，不能直接被实例化
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不必包含具体实现，并且必须在派生类中实现。
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 抽象类子类必须实现抽象类里的实现方法
    Dog.prototype.eat = function () {
        alert("我在吃");
    };
    return Dog;
}(Animal));
// var a = new Animal();  //错误写法 无法被实例化
var d = new Dog();
d.eat();
