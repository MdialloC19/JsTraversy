let output;

output=document.all.length;

output=document.documentElement;

output=document.head;

output=document.body;

output=document.head.children;

output=document.body.children;

output=document.doctype;

output=document.domain;

output=document.URL;
output=document.characterSet;
output=document.contentType;


output=document.forms[0].action;
output=document.forms[0].id='new-id';
// output=document.links[0].href='https://facebook.com';
// output=document.links[0].id='google-link'
// output=document.links[0].className='google-class';
// output=document.links[0].classList;

output=document.images[0].src;


const forms= Array.from(document.forms);
forms.forEach((forms) => {console.log(forms);
    
});

console.log(output);