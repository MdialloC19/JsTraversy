function Rectangle (name,width, height){
    this.name=name;
    this.width=width;
    this.height=height;
    
}

Rectangle.prototype.area = ()=>{
        return this.height*this.width;
    }
Rectangle.prototype.perimeter=()=> 2*(rect2.width+rect2.height);

Rectangle.prototype.isSquare=()=> {
    return this.width===this.height;
}

Rectangle.prototype.changeName=(newName)=>{
    return this.name=newName;
}

const rect =new Rectangle('Rect', 10,10);

console.log(rect)
console.log(Object.getPrototypeOf(rect))