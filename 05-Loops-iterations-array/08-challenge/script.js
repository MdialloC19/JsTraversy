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

let youngPeople=[];

youngPeople=peoples
    .filter((people)=>(people.age<=25))
    .map((elt)=>{
        return {
            name:elt.firstName,
            email:elt.email,
        }
    });
    alert(youngPeople);
console.log(youngPeople);