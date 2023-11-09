let ouPut;

outPut=document.all;
outPut=document.all[10];
outPut=document.all.length;

outPut=document.documentElement;// for getting everything in the html tag

outPut=document.head;
outPut=document.body;

outPut=document.head.children; //for getting children element of the target element
outPut=document.body.children;

outPut=document.doctype;// for having the type of the document 
outPut=document.domain;// give the domaine of  project
outPut=document.URL; // having url of the site 
outPut=document.characterSet;
outPut=document.contentType;

outPut=document.forms[0].id;
outPut=document.forms[0].method;

// document.forms[0].id='new-id';

outPut=document.links;

outPut=document.links[0];
outPut=document.links[0].href;
outPut=document.links[0].href="https://hpanel.hostinger.com/";
outPut=document.links[0].id='google-links';
outPut=document.links[0].className='google-class';
outPut=document.links[0].classList;

outPut=document.images;
outPut=document.images[0];
outPut=document.images[0].src;

const forms=Array.from(document.forms);

forms.forEach((form)=>console.log(form));//we can do that without converting it on array



console.log(outPut);