// const itemInput=document.getElementById('item-input');

// const keyParent=document.querySelector('.key');
// console.log(keyParent.childNodes[0]);
// // const theKey=document.querySelector('key');
// const onKeyDown=(e)=>{
//     console.log(e.key)
//     if(e.key){
//         keyParent.childNodes[0].innerText=e.key;
//     }
    
// };

//Method 1

// window.addEventListener('keydown',(e)=>{
    
//     const div=document.getElementById('insert');
    
//     insert.innerHTML=`
//         <div class="key">
//         ${e.key===' '?'Space':e.key}
//         <small>e.key</small>
//         </div>

//          <div class="key">
//             ${e.keyCode}
//         <small>e.keyCode</small>
//         </div>
//         <div class="key">
//             ${e.code}
//         <small>e.code</small>
//         </div>
//     `;
// });


//Method 2

function showKeyCodes(e){
    const insert=document.getElementById('insert');

    insert.innerHTML='';

    const keyCode={
        'e.key':e.key===' '?'Space':e.key,
        'e.keyCode':e.keyCode,
        'e.code': e.code,
    };

    for(let key in keyCode){
        const div =document.createElement('div');
        div.className='key';

        const small=document.createElement('small');

        const keyText=document.createTextNode(key);
        const valueText=document.createTextNode(keyCode[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);
        insert.appendChild(div);
    }
 
}
window.addEventListener('keydown',showKeyCodes);