let parties = [];

async function getParties(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const jason = await response.json();
    parties = jason.data;
    //render();
    console.log(parties);
}


getParties();