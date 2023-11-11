const jokeEl=document.querySelector('#joke');
const jokeBtn=document.querySelector('#joke-btn');
// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request

// - 4: request finished and response is ready



const generateJoke = ()=>{
    const xhr=new XMLHttpRequest();

    xhr.open('GET','https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange= function(){
    
    if(this.readyState===4){

        if ( this.status ===200){
            // console.log(JSON.parse(this.responseText));
            const data =JSON.parse(this.responseText);
           
              
            jokeEl.innerHTML=data.value;      
        }else {
            jokeEl.innerHTML='Something Went Wrong (Not  Funny)';
        }
    }
};
    xhr.send();
}

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);