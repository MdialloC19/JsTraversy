let x;

const todo ={};

todo.id=1;

todo.name='buy Milk';

todo.completed=false;
x=todo;

const person={
    adresss:{
        coords:{
            lat:42.9566,
            lng:-71.3444
        },
    },
}
x=person.adresss.coords.lat;

const obj1={a:1,b:2};
const obj2={ c:3, d:4};

const obj3={...obj1,...obj2};

const obj4=Object.assign({}, obj1,obj2);// Do same thing spread method

//

const todos=[
    {id:1,name: 'Buy milk'},
    {id:2, name: 'Pickup froms school'},
    {id:3, name :'Take out iof trash'}
];
x=todos[0].name;

x=Object.keys(todo).length;
x=Object.values(todo);

x= Object.entries(todo);// having both key and value

x=todo.hasOwnProperty('age');// for verifing if an property exist in a array

console.log(x);