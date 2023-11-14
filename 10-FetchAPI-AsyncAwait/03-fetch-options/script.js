function generateRandomString(length) {
   const charset = "@ùABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   let result = "";
   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
   }

   return result;
}




function createPost({title,body}){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title,
            body
        }),
        headers:{
            'Content-Type':'application/json',
            hello:'World',
            token:generateRandomString(12),
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data));

}
createPost({title:'My Post', body:'This  is my Post'});