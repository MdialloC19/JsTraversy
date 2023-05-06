
console.log(addDollorSign(100));// only declaration is availlable for this



//function declaration

function addDollorSign(value){
    return '$'+value;
}



// function expression

const addPlusign=function(value){
    return '+'+value;
}

console.log(addPlusign(200));