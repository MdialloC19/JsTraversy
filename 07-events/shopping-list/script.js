const clearBtn=document.querySelector('#clear');


//first way 

function onClear(){

    
    const li= document.querySelectorAll(".item");

    li.forEach((items)=> items.remove());

   
}

//second way 

function onClear1(){

    const itemList= document.querySelector('ul');
    const li= document.querySelectorAll(".item");

    li.forEach((items)=> itemList.removeChild(items));
   
}
// third way 

function onClear2(){

    const itemList= document.querySelector('ul');

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }

   
}

// btn.setAttribute('onClick','onClear()')

//JavaScript Event Listener

// clearBtn.onclick=function (){
//     alert('Clear items');
// };

//addEventListener();

// clearBtn.addEventListener('click',()=>alert('clear items'));

clearBtn.addEventListener('click',onClear);

// setTimeout(()=>clearBtn.removeEventListener('click',onClear),5000);// after 5s we can use the event

// setTimeout(()=>clearBtn.click(),5000);