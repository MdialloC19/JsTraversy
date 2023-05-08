 // Immediately invoked fucntion expression
( function(){
    const user ="Diallo";
    console.log(user);
    const hello=()=> console.log('Hello from IIFE');
    hello();
   
})();

(function (name){
    console.log("Hello " +name);

})('Niokhor');






