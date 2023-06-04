function replaceFirstItem(){
  const firstItem =document.querySelector('li:first-child');

  const li=document.createElement('li');

  li.textContent='Replace first';

  firstItem.replaceWith(li);
}

function replaceSecondItem(){
  const secondItem=document.querySelector('li:nth-child(2)');

  secondItem.outerHTML='<li>Replaced Second</li>';

}

function replaceAllItem(){
  const All=document.querySelectorAll('.item');
  // ArrayAll=Array.from(All);

  All.forEach(element => {

    element.outerHTML='<li>Replaced Second</li>';
    
  });

  // console.log(ArrayAll);
}
function replaceChildHeading(){

  const header=document.querySelector('header');
  // header.childNodes[3].replaceWith(h2);

  const h1=document.querySelector('header h1');

  const h2=document.createElement('h2');
  h2.id='app-title';
  h2.innerText=h1.innerText;

  header.replaceChild(h2,h1);

  
}
replaceAllItem();

// replaceFirstItem();
replaceSecondItem();
replaceChildHeading();