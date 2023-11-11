const promise =new Promise ((resolve, reject)=>{
    //Do some asyn task

    setTimeout(()=>{
        console.log('Async task complete');
        resolve();
    },1000)
})

promise.then(()=>{
    console.log('Promise consumed ...');
});

const getUser= new Promise ((resolve, reject)=>{
    //Do some asyn task

    setTimeout(()=>{
        // console.log('Async task complete');
        let error=false;
        if(!error){
            resolve({name: 'John', age:30});    
        }else{
            reject('Error : Something went wrong');
        }
    },2000)
})
getUser
    .then((user)=>console.log(user))
    .catch((error)=>console.log(error))
    .finally(()=>console.log('The promise has been resolved or reject'));

console.log('Hello from global scope');
