const post={
    id:1,
    title:'Post one',
    body: 'this is body',
}
// Convert to json string 

const str=JSON.stringify(post);


//parse JSON

const obj=JSON.parse(str);

const posts=[
    {
        id:1,
        title:'Post one',
        body: 'this is body',
    },
    {
        id:2,
        title: 'Post two',
        body: 'this is the body'
    }

]
const str2=JSON.stringify(posts);
console.log(str2);