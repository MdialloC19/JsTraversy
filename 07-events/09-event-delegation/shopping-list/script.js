const listItem=document.querySelectorAll('li');

const list=document.querySelector('ul');
// console.log(listItem);
// listItem.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//        e.target.remove();
//     });
// });
//target gice you what do you on
// currentTarget will give you the elt with evenListener


list.addEventListener('click', (e)=>{
    if(e.target.tagName='LI'){
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e)=>{
    if(e.target.tagName='LI'){
        e.target.style.color='red';
    }
});

