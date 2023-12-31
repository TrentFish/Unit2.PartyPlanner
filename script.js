let parties = [];
const partyList = document.querySelector('#partyList');

async function getParties(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const jason = await response.json();
    parties = jason.data;
    render();
}

function render(){
    const html = parties.map(function(party){
        console.log(party);
        return`
        <div>
          <h2>${party.name}</h2>
          <p>Location: ${party.location}</p>
          <p>Date & Time: ${party.date}</p>
          <p>Description: ${party.description}</p>
        </div>
        `
    }).join('');
    partyList.innerHTML = html;
}

getParties();