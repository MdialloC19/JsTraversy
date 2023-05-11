//Falsy values:
//-False*
// "" or '' is false 

const x=null;

if(x){
    console.log('This is truthy');
}else {
    console.log('This is falsy');
}

console.log(Boolean(x));