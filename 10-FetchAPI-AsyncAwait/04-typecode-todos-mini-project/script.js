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
            });
        });
}

const addTodoToDOM=(element)=>{
    const div=document.createElement('div');
    const item=document.createElement('div');
    const div1=document.createElement('div');
    div.classList.add('todo');
    div1.setAttribute('class','done');
    div1.appendChild (document.createTextNode('Take out trash'));
    item.setAttribute('class','item');
    div.appendChild(document.createTextNode(element.title));
    div.setAttribute('data-id', element.id);
        if(element.completed){
             div.classList.add('done-elt');
      }
    item.appendChild(div);
    item.appendChild(div1);
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

const toggleCompleted= (e)=>{
   if(e.target.classList.contains('todo')){
       e.target.classList.toggle('done-elt');
       updateTodo(e.target.dataset.id,e.target.classList.contains('done-elt'));
   }


}

updateTodo=(id,completed)=>{
    fetch(`${apiUrl}/${id}`, {
        method:'PUT',
        body:JSON.stringify({
            completed
        }),
        headers:{
            "Content-Type":"application/json",
            token:generateRandomString(50)
        } 
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
}

const deleteTodo =(e)=>{
    e.preventDefault();
    console.log('delete');
    if(e.target.classList.contains('todo')){
        const id=e.target.dataset.id;
        fetch(`${apiUrl}/${e.target.dataset.id}`, {
            method:'DELETE',
            body:JSON.stringify({
                id
            }),
            headers:{
                "Content-Type":"application/json",
                token:generateRandomString(50)
            }
     
        })
        .then(res=>res.json())
        .then(()=>e.target.remove());
   }
   

}
const init =()=>{
    document.addEventListener('DOMContentLoaded',getTodos);
    document.querySelector('#todo-form').addEventListener('submit',createTodo);
    document.querySelector('#todo-list').addEventListener('click',toggleCompleted);
    document.querySelector('#todo-list').addEventListener('dblclick',deleteTodo);
    
}

init();
