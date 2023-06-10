// window.onload=function(){
    
// };

window.addEventListener(
    'load',
    ()=>console.log('Page Loaded')
);

window.addEventListener(
    'DOMContentLoaded',
    ()=>console.log('Dom Loaded')
);

console.log('Run me');


window.addEventListener('resize',()=>{
    document.querySelector('h1').
    innerText=`Resized to ${window.innerWidth} x${window.innerHeight}`;
});

window.addEventListener('scroll',()=>{
    console.log(`scroll position ${scrollY}`);

    if(window.scrollY>70){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
    }else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';

    }
})

window.addEventListener('focus',()=>{
    document.querySelectorAll('p').forEach((item)=>{
        item.style.color='blue';
    });
});

window.addEventListener('blur',()=>{
    document.querySelectorAll('p').forEach((item)=>{
        item.style.color='red';
    });
});