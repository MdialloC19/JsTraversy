const person={
    name: 'Moussa',
    age: 30,
   isAdmin:false,
   address:{
    street: 'rue 22',
    city: 'Dakar',
    state: 'MA'
   },
   hobbied:['music','sports'],
}

x=person.name;

x=person['age'];

x=person['hobbied'];

delete person.age;
person.hasChildren=true;

person.greet=function (){
    console.log(`Hello, my name is ${this.name}`)
}

const person2={
    'first name': 'Moussa',
    'second name': 'Diallo'
};

console.log(person2['first name']);

person.greet();

console.log(x);
console.log(person);