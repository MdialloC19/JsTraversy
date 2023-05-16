const numbers=[1,2,3,4,5,6,7,8,9,10];

const sum=numbers.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0)

const sum1=numbers.reduce((acc,cur)=>acc+cur,10);


const sum3=()=>{
    let acc=0;
    for(const cur of numbers){
        acc+=cur;
    }
    return acc;
};

console.log(sum3());

const cart= [
    {id:1,name:'Product 1', price:180},
    {id:2,name:'Product 2', price:130},
    {id:3,name:'Product 3', price:230},
];

const total=cart.reduce(function(acc,product){
    return acc+product.price;
},0);
// with array methods
const total1=cart.reduce((acc,product)=>acc+product.price,0);

console.log(total1);

