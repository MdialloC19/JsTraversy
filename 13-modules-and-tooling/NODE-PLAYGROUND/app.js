

// const{ capitalizeWords,makeMoney}=require('./utils');
// // const Person=require('./Person');

// // (new Person('Moussa', '24')).greating();
// // console.log(capitalizeWords('hello world'));

// const axios=require('axios');

// async function getPost(){
//     const res =await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//     console.log(res);
// }

// getPost();
import { capitalizeWords,makeMoney} from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

 (new Person('Moussa', '24')).greating();

