// const ous=["Maths", "savant","caractère", "liter", "modou"];
const ous=[1,3,9,0,10,29,18];
// console.log(ous);
ous.sort()

console.log(ous);

//funtion types in js

function oust(){
    return 'hello world';
}
// Anonuymes
const moussa= function(){
    return 'hello world'
}

console.log(moussa());

(function(){
    console.log('Seydina Ousmane');
})()
// function arrow
 const mourtada = ()=>
    `Mourtada `;


 console.log(mourtada());

 const add =(a,b)=>a+b;

 const double=a=>a*2;
 console.log(double(2));
console.log(add(1,4));

 const Number=[1,2,4,5,6,7,8];

 Number.forEach(n=>console.log(n));