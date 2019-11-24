// 1.接口 


// ts中定义方法


/*
function print() {
    console.log("print");
}
*/


// ts中自定义方法传入参数对 json 进行约束 ，需要key为 label


/*
function printLabel(labelInfo:{label: string}): void {
    console.log(labelInfo.label);
}


// printLabel("aa");  //错误

// printLabel({name: "张三"}); //错误
 
printLabel({label: "aa"});  //正确

*/

// 对批量方法传入参数进行约束

//接口，行为和动作的规范， 对批量方法进行约束


// 传入对象的约束 属性接口
interface FullName {

    firstName: string;
    secondeName: string;
    age?: number;  //可选参数
}


function printName(name: FullName) {
    // 必须传入对象  firstname  和 secondName
    console.log(name.firstName + "--" + name.secondeName);
}

function printInfo(info: FullName) {
    console.log(info.firstName + "--" + info.secondeName + "--" + info.age);
}


var obj = {  /* 传入的参数必须包含 firstName secondName*/
    age: 20,
    firstName: "aa",
    secondeName: "ccc"
};

printInfo(obj);



interface Congig {
    type: string;
    url: string;
    data?: string;
    dataTyoe: string;
}

function ajax(config: Congig) {
    var xhr = new XMLHttpRequest();

    xhr.open(config.type, config.url, true);
    xhr.send(config.data);

    xhr.onreadystatechange  = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("成功");

            if (config.dataTyoe == "json") {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log(xhr.responseText);
            }
            
        }
    }
}

ajax({
    type: "get",
    data: "name:张三",
    url: "http://a.itying.com/api/productlist",
    dataTyoe: "json"
})


// 函数类型接口: 对方法传入的参数 以及返回值进行约束 

// 加密的函数类型接口
interface encrypt {
    (key: string, value: string): string;
}


// 方法 必须符合接口
var md5: encrypt = function(key: string, value: string): string {

    return key + value;
}


var sha1: encrypt = function(key:string, value:string): string {
    return key + value;
}

console.log(md5("name", "张三"));
console.log(sha1("name", "张三"));
 


//  可索引接口 ，数组、对象的约束


var arr: number[] = [333, 344];

var arr1: Array<string> = ["111", "222"];


// 对数据的约束
interface UserArr {
    // 数组接口  索引为number  key 是string
    [index:number]: string
}

var arr2: UserArr = ["aaa", "vvv"];




// 对对象的约束

interface UserObj {
    [index: string]: string
}

var obect: UserObj =  {
    name: "20",
    age: "32"
}



//  类类型接口 ：  对类的约束  和 抽象类有点相似

interface Animal {
    name: string;

    eat(str: string): void
}

// 使用 implements 实现 接口
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(this.name);
        
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(food: string): void {
        console.log(this.name);
        
    }
}


var d = new Dog("ssaaaaas")
d.eat()

var c = new Cat("xiaohua")
c.eat("a");



//  接口扩展，  接口可以继承接口

interface People {

    eat(): void;
}


interface Student extends Animal {
    study(): void;
}


class programmer {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    coding(code: string) {
        console.log(this.name + code);
        
    }
}

class Web extends programmer implements Student {

    constructor(name: string) {
        super(name)
    }

    study(): void {

    }
    eat(str: string): void {

    }
}

let w = new Web("aa")
w.coding("前端")