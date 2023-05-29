let output;

//Get child elements

const parent =document.querySelector('.parent');

output=parent.children[1];

output=parent.children[1].nodeName;

parent.children[1].innerText='Child two';
parent.children[1].style.color='red';

parent.firstElementChild.innerText="Child ONe";
parent.lastElementChild.innerText="Child three";

//Get parent element from child

const child=document.querySelector(".child");

output=child.parentElement;

child.parentElement.style.border="1px solid teal";
child.parentElement.style.padding="10px ";

// Sibling elements

const secondItem=document.querySelector('.child:nth-child(2)');

output =secondItem.nextElementSibling.style.color="green";
output =secondItem.previousElementSibling.style.color="orange";
console.log(output);