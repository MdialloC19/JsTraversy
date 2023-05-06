//window.alert("hello");

//console.log(window.innerWidth);

const x=100;

console.log(x,'in global');
function run(){
    console.log(window.innerHeight);

    console.log(x,'in function');
}
run();

if(true){
    console.log(x,'in block');
}

function add(){
    const x=1// we call it a variable shadowing
    const y=50;
    console.log(y+x);
}
add();