//  ts中类


/*
    类中的修饰符   属性和方法都有
    public：共有        那那都可访问
    protocted:保护   本类和子类可以访问，  在类外部没发访问
    private:私有   只有在本类可以访问，  子类和外部没法访问
*/

class Person {

    name: string; //属性 前面省略了 public 关键词
    protected a: string;
    private b: string;

    constructor(name: string, a: string) {  // 构造函数 
        this.name = name;
        this.a = a;
        this.b = "aa";
    }

    run(): void {
        alert(this.name + "在运动");
    }

    private aaa() {
    }

    static sex:string = "dd";  // 静态属性
    static print() {   //静态方法
        alert("静态方法" + this.sex);
    }

}


// Person.print();  //调用静态方法

// var p = new Person("ee", "aa")
// p.run()

// 继承,  extends super

class Web extends Person {
    constructor(name: string, a: string) {
        super(name, a); //调用super 构造函数
    }

    work() {
        alert(this.name + this.a + "在工作")
    }

    run() {
        // super.run()  调用父类的方法  
        alert(this.name + "在运动  子类")
    }
}

// var w = new Web("s", "a")
// w.run()
// w.work()




//  抽象类，提供其他类的继承，不能直接被实例化

// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不必包含具体实现，并且必须在派生类中实现。

abstract class Animal {

    abstract eat():void;
}

class Dog extends Animal {


    // 抽象类子类必须实现抽象类里的实现方法
    eat() {
        alert("我在吃");
    }
}

// var a = new Animal();  //错误写法 无法被实例化
var d = new Dog();
d.eat();