let x;

const fruits =['apple','pear', 'orange'];
const berries=['strawberry', 'blueberry', 'rasberry'];


//fruits.push(berries);


const allfruits=[fruits,berries];

//x=allfruits[1][0];

x=fruits.concat(berries);

//Spread Operator (...)
x=[...fruits, ...berries];// in this case we have the same result with concact

// Flatten Arrays

const arr=[1,2,[3,4], 5, [6,7],8];

x=arr.flat();

//Static Methods on array  Object 
 x=Array.isArray(3);// find if an element is an array

 x=Array.from('12345');// give a array from a given string

 const a=1;
 const b=2;
 const c=3;
 x=Array.of(a,b,c); // Create a array from given elements 

console.log(x);
//console.log(fruits);