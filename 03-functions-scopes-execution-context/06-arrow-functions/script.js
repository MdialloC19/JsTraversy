 /*function add (a,b){
    return a+b;
}*/
// Arrow fucntion syntax
const add=(a,b)=>{
    return a+b;
};
// Implicit Return
const substract=(a,b)=> a-b;

// Can leave off() with a single param
const double =a => a+2;


//Returning an object


const  createobj=() =>( {
    name:'Brad',
});
// Arrow function in callback
const numbers=[1,2,3,4,5,6,8];
/*
numbers.forEach(function(n){
    console.log(n);
});*/

numbers.forEach(n=> console.log(n));

console.log(add(2,3));
console.log(substract(1,2));

console.log(createobj())

