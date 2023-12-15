
const form = document.getElementById('poll-form');
const clear=document.getElementById('clear');
let itemFromStorage;

function initializePoll() {
    const poll = new Map();
    poll.set('React', 0);
    poll.set('Vue', 0);
    poll.set('Angular', 0);
    poll.set('Svelte', 0);
    poll.set('Other', 0);
    itemFromStorage = poll;
    return new Promise((resolve,reject)=>{
       resolve(JSON.stringify(Array.from(itemFromStorage.entries())));
       reject(new Error("No data"))
    })
}


function getItemFromStorage(){

    return new Promise((resolve, reject )=>{
        const pollData = localStorage.getItem('poll');

        if (pollData) {
            resolve(pollData);
        } else {
            reject(new Error("No data found"));
        }
    });
}

function setItemStorage(data){

    return new Promise ((resolve,reject)=>{
        localStorage.setItem('poll', data)
        resolve('Data added succefuly');
    })

}


function clearVote(){
    localStorage.removeItem('poll');
    initializePoll();
    displayResults();
}

function submitForm(e) {
    e.preventDefault();
    let choice = document.querySelector('input[name="poll-option"]:checked')
    if(!choice){
        alert('Please choose an option');
        return;
    }
    getItemFromStorage()
        .then((data)=>{
            itemFromStorage = new Map(JSON.parse(data));
            let vote = itemFromStorage.get(choice.value);
            itemFromStorage.set(choice.value, vote + 1);
            return setItemStorage( JSON.stringify(Array.from(itemFromStorage.entries())))
        })
        .then(
            ()=>{
                displayResults();
                document
                    .getElementById('poll-form')
                    .querySelectorAll('input, button').forEach((el)=>{
                        el.setAttribute('disabled', true);
    })    
            })
        .catch((error)=> console.log(error))

    //Disabled option after vote
   
}

function displayResults() {
  const results = document.getElementById('results');
  results.innerHTML = '';
  console.log(itemFromStorage);
  for (let [option, votes] of itemFromStorage) {
    const optionElement = document.createElement('div');
    optionElement.classList.add(
      'border-bottom',
      'p-2',
      'd-flex',
      'justify-content-between'
    );
    optionElement.innerHTML = `<strong>${option}: </strong> ${votes} votes`;
    results.appendChild(optionElement);
  }
}

form.addEventListener('submit', submitForm);
clear.addEventListener('click',clearVote);

initializePoll()
    .then((data)=>setItemStorage(data))
    .then(()=> displayResults())
    .catch((error)=>console.log(error));
