// const getUsers=async ()=>{
//     try{
//         const response =await fetch('https://jsonplaceholder.typicode.com/users');
//         // const response = await fetch('https://httpstat.us/500');
//         const data= await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }

const getPost=async ()=>{
    try{
        // const response =await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch('https://httpstat.us/500');
        const data= await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

getPost();
// getUsers();