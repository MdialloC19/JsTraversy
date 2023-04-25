let myString='developer';
//Solution 1:
let myNewString;
myNewString=myString.charAt(0).toUpperCase()+myString.slice(1);
//SOlution 2;
myNewString=myString[0].toUpperCase()+myString.slice(1);
//Solution 3:
myNewString=`${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);