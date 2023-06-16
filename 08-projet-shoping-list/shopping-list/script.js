/*************************** Variables ******************************/

const itemForm=document.getElementById('item-form');
const itemInput=document.getElementById('item-input');
const itemList=document.getElementById('item-list');
const clearBtn=document.getElementById('clear');
const filterInput=document.getElementById('filter');
const formBtn=itemForm.querySelector('button');

let isEditMode=false;


/*************************** Displaying item on load *****************/

function displayItems(){
    const itemFromStorage=getItemFromStorage();
    itemFromStorage.forEach((item)=>addItemToDOM(item));
    checkUI();
}

/*************************** Add item *******************************/

function onAddItemSubmit(e){
    e.preventDefault();
    const newItem=itemInput.value;
    
    //validate input 
    if(newItem=== ''){
        alert('Please add an item');
        return;
    }

    // Check for edit mode

    if(isEditMode){
        const itemToEdit=itemList.querySelector('.edit-mode');
        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('.edit-mode');
        itemToEdit.remove();
        isEditMode=false;
    }
    //Add new item to the dom
    addItemToDOM(newItem);

   //item to local storage 
   addItemToStorage(newItem);

    checkUI();
    itemInput.value="";
    
}

function addItemToDOM(item){

    // create list item
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const btn=createButton('remove-item btn-link text-red');
    const icon=createIcon('fa-solid fa-xmark');

    btn.appendChild(icon);
    li.appendChild(btn);

    // Add li to the DOM
   
    itemList.appendChild(li);

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

/*************************** Local Storage ******************************/


function addItemToStorage(item){
   const itemFromStorage=getItemFromStorage();
   // Add new item in the array
    itemFromStorage.push(item);

    //convert to JSON string and set Local storage
    localStorage.setItem('items',JSON.stringify(itemFromStorage));
}

function getItemFromStorage(){
    let itemFromStorage;

    if(localStorage.getItem('items')===null){
        itemFromStorage=[];

    }else {

        itemFromStorage=JSON.parse(localStorage.getItem('items'));
    }
    return itemFromStorage;

}

/*************************** //for my training ******************************/

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

/*************************** //for my training ************************/


/*************************** Remove item ******************************/

function OnClickItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('Are you sure ?')){
            removeItem(e.target.parentElement.parentElement);
        }
    }else{
        setItemToEditMode(e.target);
    }
   
}

function  setItemToEditMode(item){

    isEditMode=true
    itemList.querySelectorAll('li')
            .forEach((i) =>i.classList.remove('edit-mode'));
    item.classList.add('edit-mode');
    formBtn.style.backgroundColor="#228B22";
    formBtn.innerHTML='<i class="fa-solid fa-pen"> </i> Update item';
    itemInput.value=item.textContent;
    
}

function removeItem(item){
    //Remvoe item from the DOM
    item.remove();

    //Remove item from storage 
    removeItemFromStorage(item.textContent);
}
/***************** Remove items from local storage *********************/

function removeItemFromStorage(item){

    let itemFromStorage=getItemFromStorage();
    
    //Filter out item to be removed
    
    itemFromStorage=itemFromStorage.filter((i)=> i!== item);

    //Re-set item to localStorage
    localStorage.setItem('items', JSON.stringify(itemFromStorage));


}
/*************************** Cleaning all items ******************************/

function clearItems(){
    // itemList.innerHTML=" "; //this work
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }

    // Clear item to localStorage
    localStorage.removeItem('items');
   
    // Or localStorage.clear

    checkUI();
   
}

/***************************  Filter  item ******************************/

function filterItems(e){
    const items=document.querySelectorAll('li');
    const text=e.target.value.toLowerCase();
    items.forEach(
        (item)=>{
        const itemName=item.firstChild.textContent.toLowerCase();
        
        if(itemName.indexOf(text)!=-1){
            item.style.display='flex';
        }else{
            item.style.display='none';
        }
    })

}

/**********Remove filter and clear button when list item are empty *********/

function checkUI(){
    itemInput.value="";
    const items=document.querySelectorAll('li');

    if(items.length===0){
        clearBtn.style.display='none';
        filterInput.style.display='none';
    }else {
        clearBtn.style.display='block';
        filterInput.style.display='block';
    }
    
    formBtn.innerHTML='<i class="fa-solid fa-plus"></i>Add Item ';
    formBtn.style.backgroundColor="#333";

    isEditMode=false;

}

/********* Remove filter and clear button when list item are empty ***********/

function init(){

//Event lsiteners

itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', OnClickItem);
clearBtn.addEventListener('click', clearItems);
filterInput.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded',displayItems);

checkUI();

}

init();