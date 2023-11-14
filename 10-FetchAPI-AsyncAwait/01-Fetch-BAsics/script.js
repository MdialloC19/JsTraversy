// Fetching Json File

fetch('./movies.json')
    .then((response) => {
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    });


// Fetching from text
fetch('./text.txt')
    .then((response) => {
        return response.text();
    })
    .then((data)=>{
        console.log(data);
    });

// Fetching from API
fetch('https://api.github.com/users/MdialloC19')
    .then((response) => {
        console.log(response);
        // return response;
    })
    .then((data)=>{
        // document.querySelector('h1').textContent=data.login;
    }).catch((error)=>{
        console.log("Sommeting went wrong"+ error);
    });

