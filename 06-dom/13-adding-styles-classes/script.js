const text=document.querySelector('p');
const itemList=document.querySelector('.item-list');
const item=itemList.querySelector('li');

function run(){
    // className
    // console.log(itemList.className);
    // text.className='dark';
    console.log(itemList.classList)

    // text.classList.add('card-dark');
    // text.classList.remove('card-dark');

    text.classList.toggle('dark');
    text.classList.toggle('hidden');

    //Change Style 
    itemList.style.lineHeight='3';

}

document.querySelector('button').onclick=run;
define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    TextDecoderStream 
});
