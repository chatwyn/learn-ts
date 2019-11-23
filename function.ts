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
    function getInfo(name:string, age:number = 30): string {

        if (age) {
            return `${name} ---- ${age}`;
        } else {
            return `${name} ---- 年龄保密`;
        }
        
    }

    alert(getInfo('zhangsan'));