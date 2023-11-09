let output;

//Get child elements

const parent =document.querySelector('.parent');

output=parent.children;
output=parent.children[0];
output=parent.children[0].className;
output=parent.children[1].nodeName;


parent.children[1].innerText='Child two';
parent.children[1].style.color='red';

parent.firstElementChild.innerText='Child One';
parent.lastElementChild.innerText='Child Three';


// Get parent elements from a child

const child =document.querySelector('.child');

output=child.parentElement;

child.parentElement.style.border='1px solid #23f445';
child.parentElement.style.padding='10px';

//sibling elements


const secondItem=document.querySelector('.child:nth-child(2)');

output=secondItem;
output=secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color='green'
secondItem.previousElementSibling.style.color='yellow';



console.log(output);