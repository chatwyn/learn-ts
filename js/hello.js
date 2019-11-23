"use strict";
// 数字类型
/*
    var num:number = 3;
    num = 3;
    console.log(num);
*/
// 数组类型
// 1.第一种定义数组的方式
/*
    var arr:number[] = [11, 22, 33];
    console.log(arr);
*/
// 2.第二种定义数组方式
/*
    var arr:Array<number> = [11, 22, '33'];
    console.log(arr);
*/
//3. 第三种
// var arr3:any[] = ["sss", 11, 22];
// console.log(arr3);
// 元组类型
/*
let arr:[number, string] = [123, "ddd"];
console.log(arr);
*/
// 枚举类型
/*
enum Flag {
    success = 1,
    errror = 2
}

let s:Flag = Flag.success;

console.log(s);
*/
// 如果没有指定下标，则从0开始
/*
enum Color {
    blue,
    red,
    orange,
}

let c:Color = Color.orange;

console.log(c);
*/
// 任意类型
/*
    var aBox:any = document.getElementById("box");
    aBox.style.color = "red";
    aBox.style.textAlign = "center";
*/
// null 和 undefined 其他数据类型的子类型 
// var num:undefined;
// console.log(num);  //输出  undefined，    报错
// var num:undefined;
// console.log(num);  //输出  undefined，    //正确
//   |  可能是numberle类型可能是undefined类型
// var num: number | undefined;
// console.log(num);
/*
     //   |  可能是number类型可能是null类型可能是undefined类型
    var num: number | null | undefined;

    num = 123;

    console.log(num);
*/
// void 类型： 表示没有任何类型，一般代表方法没有返回值
/*
    function run():void {
        console.log("run");
    }

    run();
*/
/*
function num():number {
    return 123;
}
console.log(num());
*/
