const logo=document.querySelector('img');

const onclick=()=>console.log('click events')
const onDoubleclick=()=>{
    if(document.body.style.backgroundColor!=='purple'){
        document.body.style.backgroundColor='purple';
        document.body.style.color="white";
    }else{
        document.body.style.backgroundColor='white';
        document.body.style.color="black";

        
    }
}

const onRightClick=()=>console.log('right click events')

const onMouseDown=()=>console.log('mouse down ');


const onMouseUp=()=>console.log('mouse up ')
const onMouseWheel=()=>console.log('mouse Wheel')
const onMouseOver=()=>console.log('mouse oveer')
const onMouseOut=()=>console.log('mouse out')
const onDragStart=()=>console.log('On drag start ')
const onDrag=()=>console.log('drag')
const onDragEnd=()=>console.log('On drag End ')


//Event Listerners

logo.addEventListener('click', onclick);
logo.addEventListener('dblclick', onDoubleclick);
logo.addEventListener('contextmenu',onRightClick);
logo.addEventListener('mousedown',onMouseDown); // mean when we hold the left button
logo.addEventListener('mouseup',onMouseUp); // mean when we hold the left button
logo.addEventListener('wheel',onMouseWheel); // mean when we hold the left button
logo.addEventListener('mouseover',onMouseOver); // mean when we hold the left button
logo.addEventListener('mouseout',onMouseOut);
logo.addEventListener('dragstart',onDragStart);
logo.addEventListener('drag',onDrag);
logo.addEventListener('dragend',onDragEnd);