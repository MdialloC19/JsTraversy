const socials =['Twitter', 'LinkdIn', 'Facebook','Instagram'];

//console.log(socials.__proto__);


// socials.forEach(function(items){
    //     console.log(items);
    // });
    
//socials.forEach((item,index,arr)=>console.log((`${item}-${index}`)));

// we can use function in another wayyy

function logSocials(social){
    console.log(social);
}
socials.forEach(logSocials);

const socialObjs=[
    {name: 'Twitter', url:'https://twitter.com'},
    {name :'facebook', url:'https://faceboook.com'},
    {name:'instagram',url:'https://instagram.com'},
]

socialObjs.forEach(item=>console.log(item.url));

