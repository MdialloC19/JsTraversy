// Challenge 1
const getCelsius= (temp)=> (temp -32)*5/9;

console.log(`The temperature is ${getCelsius(44)} \x80 C`);
    
//Challenge 2

//first method
// const minMax=(arrow )=> {
//     arrow.sort((a,b)=>a-b);
//     obminmax={
//         'min': arrow[0],
//         'max': arrow[arrow.length-1]
//     }
//     return obminmax;
// }

// Second method
const minMax=(arrow)=>{
    const min=Math.min(...arrow);
    const max=Math.max(...arrow);
       
    return {
        min,
        max
    } 
}

console.log(minMax([2,4,3,10,24,0,1,-5,11]));

// Challenge 3

((length,width)=>{
    const area=length*width;
    const output=`the area of rectangle with length ${length} and width ${width} is ${area}`;
    console.log(output);
})(5,6);