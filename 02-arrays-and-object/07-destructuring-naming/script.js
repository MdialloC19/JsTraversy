const firstName='Moussa';
const lastName='Diallo';
const age=30;

const person={
    firstName,
    lastName,
    age
};

//

console.log(person.age);

//Destructuring 

const todo={
    id:1,
    title: 'Take out trash',
    user:{
        name: 'Moise',
        nickname: 'Capo'
    }
}

const {id: todoId, title, user:{name}}=todo;// here we rename id to todoId

console.log(todoId,title, name);

//Destructuring array

const numbers =[23,67,33,49];

const [first, second, ...res]=numbers; // res operator allow us taking other element of an object destructuring 

console.log(first,second,res);