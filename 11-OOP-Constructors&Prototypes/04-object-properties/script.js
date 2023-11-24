function Rectangle (name,width, height){
    this.name=name;
    this.width=width;
    this.height=height;

    this.area = ()=>{
        return this.height*this.width;
    }
}

const rect1= new Rectangle('rectangle 1', 10, 10);
const rect2= new Rectangle('rectangle 2', 10, 15);


rect1.color='red';

rect2.perimeter=()=> 2*(rect2.width+rect2.height);

console.log(rect2.name);
console.log(rect1.width);
console.log(rect2.perimeter());

// Delete property
delete rect2.perimeter;

// Check for property

console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));


// Get keys

console.log(Object.keys(rect1));
// Get values
console.log(Object.values(rect1));

// Get entries
console.log(Object.entries(rect1));

for(let [key,value] of Object.entries(rect1)){
    if(typeof value==='function'){
        continue;
    }

    console.log(`${key}- ${value}`);
}
console.log(rect2)
