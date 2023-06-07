const itemInput=document.getElementById('item-input');
const priorityInput=document.getElementById('priority-input');
const checkbox=document.getElementById('checkbox');
const heading=document.querySelector('h1');


function onInput(e){
   heading.textContent=e.target.value;
}

function onCheck(e){
    const isChecked=e.target.checked;
    heading.textContent=isChecked ?'Checked':'Not Check';
   


}

function onFocus(){
    console.log('input is focused');
    itemInput.style.outlineStyle='solid';
    itemInput.style.outlineWidth='1px';
    itemInput.style.outlineColor='green';
}
function onBlur(){
    console.log('Input is not focused');
    itemInput.style.outlineStyle='solid';
    itemInput.style.outlineWidth='1px';
    itemInput.style.outlineColor='red';
}

itemInput.addEventListener('input',onInput);
priorityInput.addEventListener('input',onInput);
checkbox.addEventListener('input',onCheck);
itemInput.addEventListener('focus',onFocus);
itemInput.addEventListener('blur',onBlur);

