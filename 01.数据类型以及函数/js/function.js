"use strict";
//  函数定义
// es5 中的写法
/*
// 函数声明
function run() {
    return "run";
}

// 匿名函数
var run2 = function() {
    return "run 2";
}

console.log(run());

console.log(run2());
*/
// ts中写法
/*
// 函数声明
    function run(): string {
        return "run";
    }

    console.log(run());
    

// 匿名函数

var fun2 = function():number {
    return 123;
}

alert(fun2());
*/
//ts中方法参数
/*
    function getInfo(name:string, age:number): string {

        return `${name} ---- ${age}`;
    }

    alert(getInfo('zhangsan', 20));

*/
/*

var getInfo = function(name:string, age:number): string {

    return `${name} ---- ${age}`;
}

alert(getInfo('zhangsan', 20));
*/
// 没有返回值的方法
/*
function run():void {
    console.log("aa");
}

run();
*/
// 3.2 方法可选参数
// ts中参数必须行参一样，如果不一样需要配置可选参数。 
// 注意： 可选参数必须放在必选参数后边
/*
function getInfo(name:string, age?:number): string {

    if (age) {
        return `${name} ---- ${age}`;
    } else {
        return `${name} ---- 年龄保密`;
    }
    
}

alert(getInfo('zhangsan'));

*/
/*
// 3.3 默认参数
    // es5里面没法设置默认参数，es6和ts中都可以设置默认参数
    function getInfo(name:string, age:number = 30): string {
     if (age) {
        return `${name} ---- ${age}`;
     } else {
        return `${name} ---- 年龄保密`;
     }
    }

    alert(getInfo("张三", 20));

*/
//3.4 剩余参数
//三点运算符 接受新传过来的值
/*
    function sum(...result: number[]): number {
        var sum = 0;
        for (var i = 0; i < result.length; i ++) {
            sum += result[i];
        }
        return sum;
    }

    alert(sum(1,2,3,4,5,));
*/
/*
     function sum(a:number, b: number, ...result: number[]): number {
        var sum = a + b;
        for (var i = 0; i < result.length; i ++) {
            sum += result[i];
        }
        return sum;
    }

    alert(sum(1,2,3,4,5,));
*/
// 3.5函数重载
// ts中的重载，通过为同一个函数提供多个函数类型定义类试下多种功能的目的。
// es5中出现同名方法，下面的会替换是上面的方法
/*
function css(config) {

}

function css(config, value) {

}
*/
// ts中的重载
/*
function getInfo(name: string): string;

function getInfo(age: number): number;

function getInfo(str: any): any {
    if (typeof str === "string") {
        return "我叫" + str;
    } else {
        return "我得年龄是"+str;
    }
}

// alert(getInfo("张三")); //正确

// alert(getInfo(20));  //正确
*/
/*
    function getInfo(name: string): string;

    function getInfo(name: string, age: number): string;

    function getInfo(name: any, age?: any): string {
        if (age) {
            return "我叫" + name + "我得岁数是" + age;
        } else {
            return "我叫" + name;
        }
    }

    alert(getInfo("张三")); //正确
    alert(getInfo("张三", 123)); //正确
    alert(getInfo("张三", true)); //错误
*/
// 3.6箭头函数  es6
setTimeout(function () {
    console.log("run");
}, 1000);
