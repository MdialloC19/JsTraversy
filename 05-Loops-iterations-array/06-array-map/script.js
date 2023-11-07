const numbers=[2,3,4,5,6];


const doubleNumbers=numbers.map(numbers=> 'Number '+numbers*2);


console.log(doubleNumbers);

// Same with foreach

const doubleNumbers1=[];

numbers.forEach((numbers)=>{
    doubleNumbers1.push(numbers*2);
})

console.log(doubleNumbers1);


const companies =[
    {name: 'Company One', category: 'Finance', start:1989, end: 2004},
    {name: 'Company 2', category: 'Book', start:1981, end: 2004},
    {name: 'Company 3', category: 'consulting', start:1981, end: 2008},
    {name: 'Company 4 ', category: 'Retail', start:1981, end: 2009},
    {name: 'Company 5', category: 'Finance', start:1921, end: 2000},
    {name: 'Company 6', category: 'Retail', start:1981, end: 2001},
    {name: 'Company 7', category: 'Retail', start:1920, end: 2002},
    {name: 'Company 8', category: 'Compatable', start:1990, end: 2022}
];

// Create an array of company names 

const companyNames= companies.map((companies)=>companies.name);

console.log(companyNames);

//Create an array with  just company and category

const companyInfo=companies.map((companies)=>{
    return {
        name:companies.name,
        category:companies.category
    }
});

console.log(companyInfo);

// Create an array of the length of each company in years

const companyYears=companies.map((companies)=>{
    return {
        name:companies.name,
        length:companies.end-companies.start,
    }
});
console.log(companyYears);

// Chain map methods

const squareAnddouble=numbers
    .map((numbers)=>Math.sqrt(numbers))
    .map((sqrt)=>sqrt*2);


const squareAnddouble2=numbers
    .map(function (number){
        return Math.sqrt(number);
    })
    .map(function(sqrtDoubled){
        return sqrtDoubled*2;
    })
console.log(squareAnddouble2);

// Chaining different methods

const evenDouble =numbers
    .filter((number)=>number%2==0)
    .map((number)=>number*2);

console.log(evenDouble);
