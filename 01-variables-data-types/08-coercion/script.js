let x;
x=5+'5';// Coercion in string 
x=5+Number('5');
x=5*'5';
x=5+null;
x=Number(null);
x=Number(true);

console.log(x,typeof x);