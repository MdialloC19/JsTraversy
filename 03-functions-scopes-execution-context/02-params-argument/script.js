//Default Paramas
function registerUser(user='bot', ){
    return user+' is registred';
}

console.log(registerUser('John'));

//Rest params

function sum(...numbers){
    let total=0;

    for(const num of numbers)
        total+=num;
    return total;
}

console.log(sum(1,2,3,4,10,23,10));

// Object as params

function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in `; 
}

const user={
    id: 1,
    name: 'Moussa',
};

console.log(loginUser(user));
console.log(loginUser({
    id:2,
    name:'Modou'
}));

//Arrays as params
function getRamdom(elts){
    const elt =elts[Math.floor(Math.random()*elts.length)]

    return elt;

}

console.log(getRamdom([1,2,4,10,22,33,23,44,22,200,222]));