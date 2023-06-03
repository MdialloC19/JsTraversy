// insertAdjacentElement Example

function insertElement(){
    const filter =document.querySelector('.filter');

    const h1=document.createElement('h1');
    h1.textContent='insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin',h1);
}
//insertAdjacentText Example

function insertText(){
    const item =document.querySelector('li:first-child');

    item.insertAdjacentText('afterend','insertAdjacentText')

}

//insertAdjacentHTML Example

function insertHTML(){
    const clearBtn=document.querySelector('#clear');
    
    clearBtn.insertAdjacentHTML('afterend','<h2>insertAdjacentHTML</h2>');
}


//insertBefore Example

function insertBeforeItem(){
    const ul =document.querySelector('ul');

    const li=document.createElement('li');
    // li.textContent='Bannana';
    li.innerHTML=`Banana <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i></button>`;

    const thirdItem=document.querySelector('li:nth-child(3)');

    ul.insertBefore(li,thirdItem);

}

insertElement();
insertText();
insertHTML();
insertBeforeItem();


//Clear & Performant



/*
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo 
    <!-- beforeend -->
</p>
<!-- afterend-->
*/

