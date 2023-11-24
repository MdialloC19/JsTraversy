const strLit='Hello';

const strObj=new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);


// Boxing 
console.log(strLit.toUpperCase());
console.log(strLit[0]);


// Unboxing

console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);


const funcLit =function (x){
    return x*x;
}

console.log(funcLit, typeof funcLit);

const funObj=new Function('x', 'return x*x');
console.log(funObj(3));