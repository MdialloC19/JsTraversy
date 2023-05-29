//querySelectorAll()

const listItems=document.querySelectorAll('.item');

console.log(listItems);

// listItems[1].style.color='red';

// listItems.forEach((elt, index)=> {
//     elt.style.color='red';

//     if(index===1){
//         elt.remove();
//     }
//     if(index===0){
//         elt.innerHTML=`Orange
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// });

const listItems2=document.getElementsByClassName('item');

console.log(listItems2[2].innerText);
listItems2Array=Array.from(listItems2);

listItems2Array.forEach(element => {
    console.log(element.innerText);
    
});

const listItems3=document.getElementsByTagName('li');

console.log(listItems3);

