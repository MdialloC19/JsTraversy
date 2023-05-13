const items=['book', 'table','chair','kite'];

const users=[
    {name: 'Musa'},
    {name: 'Kate'},
    {name: 'Jalo'},
];

// loop through arrays

for (const item of items){
    console.log(item);
}
// Loop over object
for (const user of users){
    console.log(user);
}

// Loop over strings

const letters ="Mouussa";

for(letter of letters){
    console.log(letter);
}

// loop over Maps

const map=new Map();

map.set('name','john');
map.set('age',30);

for( const [key,value] of map){
    console.log(key,value);
}