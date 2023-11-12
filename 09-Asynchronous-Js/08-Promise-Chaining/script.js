const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{

        let error =true
        if(!error){
            resolve({
                "name":"Moussa Diallo",
                "age":"23"
            })
        }else{
            reject("Something went wrong");
        }
    },2000);
})

promise
    .then((user)=>{
        console.log(user);
        return user.name;
    })
    .then((name)=>{
        console.log(name)
        return name.length;
    })
    .then((len)=>{
        console.log(len);
    })
    .catch((error)=>{
        console.error(error)
        return 123;
    })
    .then((x)=>console.log('THis will run no matter what', x));