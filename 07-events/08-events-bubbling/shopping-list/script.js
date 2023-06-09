const button=document.querySelector('form button');

const div =document.querySelector('form div:nth-child(2)');

const form =document.querySelector('form');
// console.log(div.innerHTML);
button.addEventListener('click',(e)=>{
    alert('Button was clicked');
    e.stopPropagation;
});

div.addEventListener('click',()=>{
    alert('div is clickeed');
});

form.addEventListener('click',()=>{
    alert('form is clickeed');
});
