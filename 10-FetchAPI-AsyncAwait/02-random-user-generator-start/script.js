function fetchUser(){
    showSpinner();
    fetch('https://randomuser.me/api/')
        .then((response)=>{
                return response.json();
        })
        .then((data)=>{
            hideSpinner();
            displayUser(data.results[0]);
        })
}


function displayUser(user){

    const userDisplay=document.querySelector('#user');
    if(user.gender==="male"){
        document.body.style.backgroundColor="rgb(13 148 136)";
        document.querySelector('#generate').style.backgroundColor="rgb(16 185 129)";
        // document.getElementsByName("img").src=user.picture.large;
    }else{
         document.body.style.backgroundColor="rgb(56 189 248)";
          document.querySelector('#generate').style.backgroundColor="rgb(34 211 238)";
    }
    userDisplay.innerHTML=`
     <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src=${user.picture.large}
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span>${user.city} ${user.state} ${user.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.age}</p>
            </div>
          </div>
        </div>`
    
}

function showSpinner(){
    document.querySelector('.spinner').style.display='block';
}

function hideSpinner(){
    document.querySelector('.spinner').style.display='none';
}

document.querySelector("#generate").addEventListener('click',fetchUser);
