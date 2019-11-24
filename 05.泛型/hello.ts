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
function getData<T>(value:T): T {

    return value;
}

// 返回值可以改成any， 不必要跟随泛型
function getData1<T>(value:T): any {
    return "aaa"
}


getData<number>(123);

// getData<number>("123");  //错误的写法




//  泛型类 

class MinClass<T> {
    public list: T[] = []

    add(num: T) {
        this.list.push(num)
    }

    min(): T {
        var minNum = this.list[0];

        for (var i = 0; i < this.list.length; i++ ){
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }

        return minNum;
    }
}

var m = new MinClass<number>();  //实例化类 指定T是number

m.add(2);
m.add(24);
m.add(24);
m.add(3);

alert(m.min());


// 泛型接口

interface ConfigFn {
    <T>(value1: T): T;
}

var getValue: ConfigFn = function<T>(value1: T): T {
    return value1;
}

getValue<string>("1233")
// getValue<string>(123) // 错误写法  



// 第二种泛型接口
interface ConfigFn1<T> {
    (value1: T): T;
}

var getValue1: ConfigFn1<string> = function(value1: string): string {
    return value1;
}

getValue1("11")



/*

泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)，下面我们看看把类当做参数的泛型类

1、定义个类
2、把类作为参数来约束数据传入的类型 

*/


//定义操作数据库的泛型类
class MysqlDb<T>{
    add(info:T):boolean{
        console.log(info);       
        return true;
    }
    updated(info:T,id:number):boolean {
        console.log(info);  
        
        console.log(id); 

        return true;
    }
}

//想给User表增加数据

// 1、定义一个User类 和数据库进行映射

class User{
    username:string | undefined;
    pasword:string | undefined;
}
var u=new User();
u.username='张三';
u.pasword='123456';
var Db=new MysqlDb<User>();
Db.add(u);



//2、相关ArticleCate增加数据  定义一个ArticleCate类 和数据库进行映射

class ArticleCate{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
    constructor(params:{
        title:string | undefined,
        desc:string | undefined,
        status?:number | undefined
    }){

        this.title=params.title;
        this.desc=params.desc;
        this.status=params.status;
    }

}
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
var a= new ArticleCate({
        title:'分类111',
        desc:'2222'      
});

a.status=0;
var Db1=new MysqlDb<ArticleCate>();
Db1.updated(a,12);