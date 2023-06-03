
// Quick & Dirty
function listItems(item){

    const li=document.createElement('li');

    li.innerHTML=`${item} <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i></button>`;
    document.querySelector('ul').appendChild(li);

}

//Clear & Performant

function createNewItem(item){

    const li=document.createElement('li');
    
    const text =document.createTextNode(item);
    li.appendChild(text);
    
    const button=createButton('remove-item btn-link text-red')
    
    
    li.appendChild(button);
    
    console.log(li.innerHTML);
    document.querySelector('ul').appendChild(li);
    


}

// creating function with buttton

function createButton(classes){
    const button=document.createElement('button');
    button.setAttribute('class',classes);

    const icon=createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;

}

function createIcon(classes){
    const icon=document.createElement('i');
    icon.setAttribute('class',classes);

    return icon;
}

listItems('banana');
createNewItem('sauce');