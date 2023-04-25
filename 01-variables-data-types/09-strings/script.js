let x;
const name ='John';
const age=31;
x='hello my name is '+name+' and i am '+age+ ' years old';
// Template literals
x = `Hello, my name is ${name} and I am ${age} years`;

// String Properties and Methods
const s=new String('Hello World');
x= typeof s;
x=s.length;
//Access value by keys

x=s[6];
x=s.__proto__;
x=s.toLowerCase();
x=s.charAt(0);
x=s.indexOf('e');
x=s.substring(1,4);
x=s.slice(-11,-5);// like substring but can begin at the ends of 
x='                                Hello World';
x=s.trim();// delete extra espace
x=s.replace('World', 'john');
x=s.includes('ello');
x=s.valueOf();
x=s.split('');// separate a string in array

console.log(x);