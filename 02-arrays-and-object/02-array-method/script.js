let x;
const arr =[34,55,95,20,15];

//arr.push(100);// Allow us to add new elt in array

//arr.pop();// Remove last index in array

//arr.unshift(99);// add new elt on the beginininng

//arr.shift();//Remove the first 

//arr.reverse();// sort the array on ascending order

x=arr.includes(20);


x=arr.indexOf(399);
x=arr.slice(1,4);
arr.push(100);// Allow us to add new elt in array

arr.pop();// Remove last index in array

arr.unshift(99);// add new elt on the beginininng
//x=arr.splice(3,1)// Allow us to remove elt
//rr.shift(1,4);//Remove the first 

//arr.reverse();// sort the array on ascending order
x=arr.splice(1,4).reverse().toString();
console.log(x);