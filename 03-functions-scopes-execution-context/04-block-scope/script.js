const x=100;

if(true){
    const y=200;
    console.log(x+y);
}

for(let i=0;i<=10;i++){
    console.log(i);
}

//console.log(i);

if(true){
    const a=100;
    let b=700;
    var c=600;
}

console.log(c);


// the very big different with var and let is that ; let is block scope and var isn't
// that why const and let were introduce on ES6

function run(){
    var d=100;
    console.log(d);
}
run();

//console.log(d); the won't run because var is function scope