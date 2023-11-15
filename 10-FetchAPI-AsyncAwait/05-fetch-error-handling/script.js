// fetch("https://httpstat.us/200")
//     .then((res)=>{
//         return res;
//     })
//     .then((data)=>console.log(data));


// fetch("https://httpstat.us/404")
//     .then((res)=>{
//         if(!Response.ok){
//             throw new Error('Request Failed');
//         }
//         return res;
//     })
//     .then((data)=>console.log(data))
//     .catch((error)=>{
//         console.log(error);
//     });

fetch("https://httpstat.us/404")
    .then((res)=>{
        if(res.status==="404"){
            throw new Error('Not Found');
        }else if(res.status==="500"){
            throw new Error('Server Error');
        }else if(res.status!==200){
            throw new Error('Request Failed');
        }
        return res;
    })
    .then((data)=>console.log(data))
    .catch((error)=>{
        console.log(error);
    });



// catch runs on a network error
// fetch("https://http/404")
//     .then((res)=>{
//         
//         return res;
//     })
//     .then((data)=>console.log(data))
//     .catch((error)=>{
//         console.log(error);
//     });