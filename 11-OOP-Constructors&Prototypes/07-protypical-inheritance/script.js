
function Shape(name){
    this.name=name;
}

Shape.prototype.logName = function(){
    console.log(`Shape Name: ${this.name} `);
}

function Rectangle (name,width, height){
    Shape.call(this,name);
    this.width=width;
    this.height=height;
}

// Inherits Shape prototypes 
Rectangle.prototype= Object.create(Shape.prototype);

Rectangle.prototype.logName = function(){
    console.log(`Rectangle Name: ${this.name} `);
}
function Circle (name,radius){
    Shape.call(this,name);
    this.radius=radius;
}

// Set prototype constructors
Rectangle.prototype.constructor=Rectangle;
Circle.prototype.constructor=Circle;
const rect =new Rectangle('Rectangle 1', 20, 20);
const cercle =new Circle('Circle 1', 20);
rect.logName();

console.log(rect.constructor);