const suits = ['flowers','spades','hearts','dice']
const values = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king']



deck = []

suits.forEach(function(suit){
  values.forEach(function(value){
    deck.push(`${value} of ${suit}`);
  })
})

//shuffle the cards

for (let i = deck.length - 1; i > 0; i--) {
  // randomly pick a card from the deck
  // swap it with the current card index
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

const cardbox = document.getElementById('cards')
console.log(cardbox)

for(i=0;i<deck.length;i++){
  var anchor = document.createElement('div')
  var value = deck[i]
  anchor.innerText = value
  cardbox.append(anchor)
}
//important resources for your game
//https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript




console.log(deck)
