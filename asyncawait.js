let baseURL = 'http://numbersapi.com/'


async function getFact(n) {
    let { data: { text: fact } } = await axios.get(`${baseURL}${n}?json`)
    return fact
}

async function getFacts(nums) {
    let URL = baseURL + nums.join()

    let { data } = await axios.get(URL)
    for (fact in data) {
        console.log(data[fact])
    }
}

async function getFourFacts(n) {
    factPromises = [];
    for (i = 0; i < 4; i++) {
        factPromises.push(getFact(n))
    }
    let facts = await Promise.all(factPromises)
    for (fact of facts) {
        console.log(fact)
    }


}

let cardBaseURL = `https://deckofcardsapi.com/api/deck/`

async function drawOne() {
    let { data: { deck_id: deckID } } = await axios.get(`${cardBaseURL}new/shuffle/`)
    let resp = await axios.get(`${cardBaseURL}${deckID}/draw`)
    console.log(`${resp.data.cards[0].value} of ${resp.data.cards[0].suit}`)
}

async function drawTwo() {
    let cards = [];
    let { data: { deck_id: deckID } } = await axios.get(`${cardBaseURL}new/shuffle/`)
    let resp1 = await axios.get(`${cardBaseURL}${deckID}/draw`)
    cards.push(`${resp1.data.cards[0].value} of ${resp1.data.cards[0].suit}`)
    let resp2 = await axios.get(`${cardBaseURL}${deckID}/draw`)
    cards.push(`${resp2.data.cards[0].value} of ${resp2.data.cards[0].suit}`)

    console.log(cards)
}