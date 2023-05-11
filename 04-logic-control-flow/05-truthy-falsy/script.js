//Falsy values:
//-False*
// "" or '' is false 

const x=null;

if(x){
    console.log('This is truthy');
}else {
    console.log('This is falsy');
}

// falsy assigment 

let a=false 

// if(!a){
//     a=10
// }

a=a ||10;

//&& =assign the right side value only if left os truthy
let b=0;
b=b && 20 // b&&=20
console.log(b);

// ??= assigns the right side value only if the left is null or undefined 

let c=null

if(c===null || c===undefined){
    c=20;
}

c=c??20;
c ??=20;
console.log(c);
console.log(Boolean(x));