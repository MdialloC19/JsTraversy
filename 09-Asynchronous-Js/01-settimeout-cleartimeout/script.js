// setTimeout(function (){
//     console.log('Hello from callback');
// },2000);

// setTimeout(changeText,2000);

console.log('Hello from global scope');


function changeText(){
    document.querySelector('h1').textContent='Hello from callback';
}

const timeId=setTimeout(changeText,3000);


document.querySelector('#cancel').addEventListener('click', ()=>{
    console.log(timeId);
    clearTimeout(timeId);
    console.log('Timer Cancelled');
})