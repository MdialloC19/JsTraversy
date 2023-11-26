class Shape {
    constructor(name){
        this.name=name;
    }
    
    logName(){
        console.log('Shape Name : '+ this.name );
    }
    
}

class Rectangle extends Shape{
    constructor(name, width, height){
        super(name);
        this.width=width;
        this.height=height;
    }
}

const rect =new Rectangle('Rect 1', 20, 20)
console.log(rect);
rect.logName();

class Circle extends Shape{
    constructor(name,radius){ù
        super(name);
        this.radius=radius;
    }
}

const cir =new Circle('Circle 1', 20);

console.log(cir);
cir.logName();
