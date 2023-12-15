const set =new Set([1,2,2,2,3,2,4]);

set.add(5);


console.log(set.has(3));

set.delete(5);



const setArray= Array.from(set);


for( item of set)
    console.log(item);


const iterator =set.values();

console.log(iterator.next());

set.clear();

console.log(setArray);
console.log(set);
