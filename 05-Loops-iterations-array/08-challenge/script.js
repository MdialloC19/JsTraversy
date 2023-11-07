//Challenge 1
const peoples =[
    {
        firstName:'John',
        lastName:'Doe',
        email:'john@gmail.com',
        phone:'111-111-1111',
        age:30,
    },
    {
        firstName:'Musa',
        lastName:'Diallo',
        email:'Musa@esp.sn',
        phone:'222-222-2222',
        age:25,
    },
    {
        firstName:'Modou',
        lastName:'Diop',
        email:'modou@esp.sn',
        phone:'333-333-3333',
        age:18,
    },
    {
        firstName:'Niokhor',
        lastName:'Bouna',
        email:'bouna@esp.sn',
        phone:'444-444-4444',
        age:20,
    },
    {
        firstName:'Assane',
        lastName:'Diallo',
        email:'assane@gmail.com',
        phone:'555-555-5555',
        age:32,
    },
    {
        firstName:'Ablaye',
        lastName:'Gueye',
        email:'Ablaye@gmail.com',
        phone:'666-666-6666',
        age:32,
    },
]



const youngPeople=peoples
    .filter((people)=>(people.age<=25))
    .map((elt)=>{
        return {
            name:elt.firstName +" "+ elt.lastName,
            email:elt.email,
        }
    });
console.log(youngPeople);

// Challenge 2

const numbers=[2,4,-10,20,25,29,13,-12,-100];

const positiveSum=numbers
            .filter((number)=>number>0)
            .reduce((acc,cur)=>acc+cur,0);

console.log(positiveSum);

//Challenge 3

const words=['coder','programmer','developer'];

const capitalizedWords=words.map(
    (word)=>(word[0].toUpperCase()+word.slice(1))
    );

console.log(capitalizedWords);