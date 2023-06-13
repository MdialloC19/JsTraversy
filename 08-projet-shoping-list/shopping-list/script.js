const itemForm=document.getElementById('item-form');
const itemInput=document.getElementById('item-input');
const itemList=document.getElementById('item-list');

// console.log(itemInput.value='vue');
function addItem(e){
    e.preventDefault();
    const newItem=itemInput.value;
    
    //validate input 
    if(newItem=== ''){
        alert('Please add an item');
        return;
    }
    // create list item
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const btn=createButton('remove-item btn-link text-red');
    const icon=createIcon('fa-solid fa-xmark');

    btn.appendChild(icon);
    li.appendChild(btn);

    itemList.appendChild(li);
    itemInput.value="";
    
}
//for my training

function addOnTop(e){

    e.preventDefault();
    const newItem=itemInput.value;
    
    //validate input 
    if(newItem=== ''){
        alert('Please add an item');
        return;
    }
    // create list item
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const btn=createButton('remove-item btn-link text-red');
    const icon=createIcon('fa-solid fa-xmark');

    btn.appendChild(icon);
    li.appendChild(btn);

    const top=document.querySelector('li:nth-child(3)');
    // itemList.insertBefore(li,top);
    addAfter(li,top);
    itemInput.value="";

}

function addAfter(eltTOAdd,elt){
    ref=elt.parentNode;

    // ref.insertBefore(eltTOAdd,elt.nextSibling);

    //Another way doing that

    elt.insertAdjacentElement('afterEnd',eltTOAdd);

    

}

// fucntion for creating button
function createButton(classes){

    const btn=document.createElement('button');
    btn.setAttribute('class',classes);
    return btn;    
}

//function for creating icon
function createIcon(classes){
    
    const icon=document.querySelector('i');
    icon.setAttribute('class',classes);
    return icon;
}

//event lsiteners

itemForm.addEventListener('submit', addOnTop);