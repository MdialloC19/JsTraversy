const apiUrl='https://jsonplaceholder.typicode.com/todos';

function generateRandomString(length) {
   const charset = "@ùABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   let result = "";
   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
   }

   return result;

}

const getTodos=()=>{
    fetch(apiUrl+'?_limit=5')
        .then(res=>res.json())
        .then((data)=>{
            data.forEach((todo) => {
                addTodoToDOM(todo);

                
                // const item=document.createElement('div');
                // item.setAttribute('class','item');
                // // div.innerText=element.title;
                // console.log(item);
                // item.innerHTML=`<div >${element.title}</div>  <div class="done">Take out trash</div>`;
                // document.getElementById('todo-list').appendChild(item);
            });
        });
}

const addTodoToDOM=(element)=>{
    const div=document.createElement('div');
    const item=document.createElement('div');
    item.setAttribute('class','item');
    div.appendChild(document.createTextNode(element.title));
    div.setAttribute('data-id', element.id);
        if(element.completed){
             div.classList.add('done');
      }
        item.innerHTML=`<div>${div.innerHTML}</div> <div class="done">Take out trash</div>`;
        document.getElementById('todo-list').appendChild(item);
}

const createTodo= (e)=>{
    e.preventDefault();
    const newTodo={
        title:  e.target.firstElementChild.value,
        completed: false
    }
    fetch(apiUrl, {
        method:'POST',
        body:JSON.stringify(newTodo),
        headers:{
            "Content-Type":"application/json",
            token:generateRandomString(50)
        }
        
    })
    .then((res)=> res.json())
    .then((data)=>addTodoToDOM(data))
}
const init =()=>{
    document.addEventListener('DOMContentLoaded',getTodos);
    document.querySelector('#todo-form').addEventListener('submit',createTodo)
    
}

init();
