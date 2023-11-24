const rectangleProtype={
    area :function(){
        return this.width *this.height;
    },
    perimeter :function (){
        return 2*(this.width+ this.height);
    },
    isSquare : function(){
        return (this.width===this.height);
    }
}

function createRectangle (width, height){
    return Object.create(rectangleProtype, {
       width: {
            value: width,
       },
       height:{
            value: height,
       },
    });
}

const rec =createRectangle(10,20);

console.log(rec.area());
console.log(rec.isSquare());
