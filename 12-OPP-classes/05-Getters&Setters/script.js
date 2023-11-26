class Person{
    constructor(firstName, lastName){
        this._firstName=firstName;
        this._lastName=lastName;
    }

    capitalizeFirst(value){
        return value.charAt(0).toUpperCase() +
                value.slice(1);
    }

    get firstName(){
        return  this.capitalizeFirst(this._firstName);
    }
    set firstName(value){
        this._firstName=this.capitalizeFirst(value);
    }
    get lastName(){
        return  this.capitalizeFirst(this._lastName);
    }
    set lastName(value){
        this._firstName=this.capitalizeFirst(value);
    }
}

const person1= new Person('John', 'Doe');
person1.firstName='Moussa';

console.log(person1.firstName);
console.log(person1)