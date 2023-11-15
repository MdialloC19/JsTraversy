const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:"Moussa", age: 20});
    },1000);
});


// promise.then(data=>console.log(data));

async function getPromise (){
    const response= await promise;
    console.log(response);
}

async function getUsers(){
    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log(data);
}
getUsers();

getPromise();

const  getPosts= async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await res.json();
    console.log(data);
}