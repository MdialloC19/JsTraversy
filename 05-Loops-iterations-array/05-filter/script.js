const numbers =[1,2,3,4,5,6,7,8,9,10];

// const evenNumbers=numbers.filter(function (number){
//     return number%2===0;
// });

//short version
 //const evenNumbers=numbers.filter((number) =>number %2===0);

// With foreach

//  let evenNumbers=[];
// numbers.forEach( number=> {
//     if(number%2===0){
//         evenNumbers.push(number);
//     }
// });

const companies =[
    {name: 'Compagny One', category: 'Finance', start:1989, end: 2004},
    {name: 'Compagny 2', category: 'Book', start:1981, end: 2004},
    {name: 'Compagny 3', category: 'consulting', start:1981, end: 2008},
    {name: 'Compagny 4 ', category: 'Retail', start:1981, end: 2009},
    {name: 'Compagny 5', category: 'Finance', start:1921, end: 2000},
    {name: 'Compagny 6', category: 'Retail', start:1981, end: 2001},
    {name: 'Compagny 7', category: 'Retail', start:1920, end: 2002}
];

// companies.forEach((companie)=>{
    //         if (companie['category']=='Retail')
    //             Retail.push(companie['name']);
    
    
    // });
    
   const Retail= companies.filter((
    companie)=> companie.category==='Retail');
console.log(Retail);

//Get companies started in or after 1980 and ended in or before 2005

const earlyCompagnies=companies.filter((
    companie)=> companie.start >=1980 && companie.end<=2005);
console.log(earlyCompagnies);

//Get campagnies that lasted 10 years or more

const longCompanies= companies.filter((
    companie
)=>(companie.end-companie.start)>=10);

console.log(longCompanies);
