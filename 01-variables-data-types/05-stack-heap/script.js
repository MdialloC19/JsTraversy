// Values are stored on the stack
const name='Musa';
const age=30;

//References values are stored on the heap

const person={
    name:'Aliou',
    age: 40,
}

let newName=name;
newName='Moussa';
let newPerson=person;
newPerson.name='Badara';
console.log(name,newName);
console.log(person,newPerson);