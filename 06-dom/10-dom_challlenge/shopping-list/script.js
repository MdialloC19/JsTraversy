

// function inseertAfter

function insertAfter(elt,ref){

    ref.insertAdjacentHTML('afterEnd',elt);

    
}

const ul =document.querySelector('ul');

const li=document.createElement('li');
// li.textContent='Bannana';
li.innerHTML=`Banana <button class="remove-item btn-link text-red">
<i class="fa-solid fa-xmark"></i></button>`; 

const thirdItem=document.querySelector('li:nth-child(3)');
console.log(li);


function insertAfter2(newElt, existEl) {
    (existEl.parentNode).insertBefore(newElt, existEl.nextSibling);
  }

insertAfter2(li,thirdItem);
