class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greating(){
        console.log(`Hello, my name is ${this.name} i'm ${this.age}`);
    }
}

export default Person;