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

console.log(rect2.area());

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);