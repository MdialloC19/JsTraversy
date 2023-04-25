let x;
const num=new Number(5.4267);
x=num.toString();
x=num.toString().length;
x=num.toFixed(2);// give the number in decimal

x=num.toPrecision(3);
x=num.toExponential(2);// exponential form
x=num.toLocaleString('en-US');
x=Number.MIN_VALUE;

console.log(x);