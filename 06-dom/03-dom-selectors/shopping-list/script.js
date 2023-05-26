// document.getElementById();



console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes 

// document.getElementById('app-title').id='new-id';

//these are the same
document.getElementById('app-title').title='Shopping List';

document.getElementById('app-title').setAttribute('class','title');

console.log(document.getElementById('app-title'));

const title=document.getElementById('app-title');

//Get/Change content

console.log(title.textContent);

title.textContent='Hello World';
title.innerText='Hello again';
title.innerHTML='<strong>Shopping list</strong>';
// Change Style
title.style.color='white';
title.style.backgroundColor='red';
title.style.padding='10px';
title.style.borderRadius='10px';

//document.querySelector();

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem=document.querySelector('li:nth-child(2)');
secondItem.innerText='Apple Juice';
secondItem.style.color='red';

//Use these methods on other elements;

const list=document.querySelector('ul');

const firstItem=list.querySelector('li');
firstItem.style.color='blue';

const bouton=document.querySelector('button');
// const inputVoir=document.getElementsByTagName('input')[1].placeholder='Nous allons filter';
const inputVoir=document.getElementById('filter').setAttribute('placeholder','Nous allons filter');
const itemsJuc=document.querySelector('li:nth-child(4)');
itemsJuc.innerHTML='<em>Mango</em>';
const images=document.querySelector('img');
images.style.borderRadius='50px';
bouton.style.backgroundColor='teal';

console.log(images);


