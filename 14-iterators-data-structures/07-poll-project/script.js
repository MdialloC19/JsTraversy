const form = document.getElementById('poll-form');
const clear = document.getElementById('clear');
let itemFromStorage;

function initializePoll() {
    const pollData = localStorage.getItem('poll');
    if (pollData) {
        itemFromStorage = new Map(JSON.parse(pollData));
    } else {
        const poll = new Map();
        poll.set('React', 0);
        poll.set('Vue', 0);
        poll.set('Angular', 0);
        poll.set('Svelte', 0);
        poll.set('Other', 0);
        itemFromStorage = poll;
        const data= JSON.stringify(Array.from(itemFromStorage.entries()));
        setItemStorage(data);
    }
}

function getItemFromStorage() {
    return new Promise((resolve, reject) => {
        const pollData = localStorage.getItem('poll');

        if (pollData) {
            resolve(pollData);
        } else {
            reject(new Error("No data found"));
        }
    });
}

function setItemStorage(data) {
    return new Promise((resolve, reject) => {
        localStorage.setItem('poll', data);
        resolve('Data added successfully');
    });
}

function clearVote() {
    localStorage.removeItem('poll');
    initializePoll();
    displayResults();
}

function disableFormElements() {
    document
        .getElementById('poll-form')
        .querySelectorAll('input, button')
        .forEach((el) => {
            el.setAttribute('disabled', true);
        });
}

function submitForm(e) {
    e.preventDefault();
    let choice = document.querySelector('input[name="poll-option"]:checked');
    if (!choice) {
        alert('Please choose an option');
        return;
    }
    let vote = itemFromStorage.get(choice.value);
    itemFromStorage.set(choice.value, vote + 1);
    setItemStorage(JSON.stringify(Array.from(itemFromStorage.entries())))
        .then(() => {
            displayResults();
            disableFormElements();
        })
        .catch((error) => console.error(error));
}

function displayResults() {
    const results = document.getElementById('results');
    results.innerHTML = '';
    for (let [option, votes] of itemFromStorage) {
        const optionElement = document.createElement('div');
        optionElement.classList.add('border-bottom', 'p-2', 'd-flex', 'justify-content-between');
        optionElement.innerHTML = `<strong>${option}: </strong> ${votes} votes`;
        results.appendChild(optionElement);
    }
}

form.addEventListener('submit', submitForm);
clear.addEventListener('click', clearVote);

initializePoll();
displayResults();
