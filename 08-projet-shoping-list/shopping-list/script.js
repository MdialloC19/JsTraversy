const itemForm=document.getElementById('item-form');
const itemInput=document.getElementById('item-input');
const itemList=document.getElementById('item-list');
const clearBtn=document.getElementById('clear');
const filterInput=document.getElementById('filter');


/*************************** Add item ******************************/
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

    // Add li to the DOM
   
    itemList.appendChild(li);

    checkUI();
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
    
    const icon=document.createElement('i');
    icon.setAttribute('class',classes);
    return icon;
}

/*************************** Remove item ******************************/

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('Are you sure ?'))
            e.target.parentElement.parentElement.remove();
    }
    checkUI();

}

function clearItems(){
    // itemList.innerHTML=" "; //this work
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }

    checkUI();
   
    
}

/*************************** Remove filter and clear button when list item are empty******************************/

function checkUI(){
    const items=document.querySelectorAll('li');

    if(items.length===0){
        clearBtn.style.display='none';
        filterInput.style.display='none';
    }else {
        clearBtn.style.display='block';
        filterInput.style.display='block';
    }
    
}

//event lsiteners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
checkUI();