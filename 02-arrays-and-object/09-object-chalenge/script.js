const library =[
        {
        title: " voir",
        author: "Mariama",
        status:{
            own: true,
            reading: false,
            read:false
        }
    },
    {
        title: "Koorgui",
        author: "Modou",
        status:{
            own: true,
            reading: false,
            read:false
        }
    },
    {
        title: " Caytu",
        author: "alain",
        status:{
            own: true,
            reading: false,
            read:false
        }
    }
]
// Step 2
/*for(let i=0;i<3;i++){
    library[i]["status"]["read"]=true;
}*/

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

// Step3

const {title:firstBook}=library[0];



//step 4

const jsonObject=JSON.stringify(library);


console.log( jsonObject);