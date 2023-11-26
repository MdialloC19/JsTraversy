class Shape {
    constructor(name){
        this.name=name;
    }
    
    static logName(){
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

// const rect =new Rectangle('Rect 1', 20, 20)

Rectangle.logName();

