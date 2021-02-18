let baseURL = `https://deckofcardsapi.com/api/deck/`;
let deckID;
async function newDeck() {
    try {
        let resp = await axios.get(`${baseURL}new/shuffle`)
        deckID = resp.data.deck_id
    }
    catch {
        console.log('couldnt shuffle')
    }
}

$('button').click(async function (evt) {
    evt.preventDefault();
    try {
        let resp = await axios.get(`${baseURL}${deckID}/draw`)
        $('#cards').append(`<img src=${resp.data.cards[0].image}>`)
    }
    catch {
        console.log('couldnt draw')
    }
})

$(newDeck())