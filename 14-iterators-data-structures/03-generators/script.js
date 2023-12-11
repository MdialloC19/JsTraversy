function* createTeamIterator(teams){
    for (let i = 0; i < teams.length; i++) {
        yield teams[i];
    }
}

const teams=['Red Sox','Yankees', 'Astros', 'Dodgers'];

const iterator=createTeamIterator(teams);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for(const  teams of iterator){
//     console.log(teams);
// }

// console.log([...createTeamIterator(teams)]);


