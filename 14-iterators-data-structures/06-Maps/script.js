const myMap=new Map();

myMap.set('name', 'John');
myMap.set(1,'blue');
myMap.set(2, 'red');


console.log(myMap.get('name'))
console.log(myMap.get(1))
console.log(myMap.get(2))

console.log(myMap.has('name'))

myMap.delete(2);
console.log(myMap.size);

const peopleMap=new Map();

peopleMap.set('moussa', {
    'tel': 7891234556,
    'email': 'moussa@nior.sn',
});

peopleMap.set('fall', {
    'tel': 7348594556,
    'email': 'fall@nior.sn',

});

peopleMap.set('fata', {
    'tel': 78934556,
    'email': 'fata@nior.sn',
});

peopleMap.forEach((person)=> console.log(person.email));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator =peopleMap.values();

console.log(iterator.next());

const peopleArray= Array.from(peopleMap);

console.log(peopleArray);