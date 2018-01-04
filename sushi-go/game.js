import Game from 'boardgame.io/game';

const deck = Array.prototype.concat(...[
  Array(14).fill('tempura'),
  Array(14).fill('sashimi'),
  Array(14).fill('dumpling'),
  Array(12).fill('maki2'),
  Array(8).fill('maki3'),
  Array(6).fill('maki1'),
  Array(10).fill('salmon'),
  Array(5).fill('squid'),
  Array(5).fill('egg'),
  Array(10).fill('pudding'),
  Array(6).fill('wasabi'),
  Array(4).fill('chopsticks')
]);

// Remove and return random card from deck
function pullRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  // Where's the immutability?
  return arr.splice(index, 1);
}

function dealHand(count) {
  const hand = [];
  for (var i = 0; i <= count; i++) {
    hand.push(pullRandom(deck));
  }

  return hand;
}

function isGameOver() {
  // Determine hands are empty or rounds completed based on players
}

const cardsToPlayers = [null, null, 10, 9, 8, 7];

const SushiGo = Game({
  setup: (numPlayers) => {
    return {
      passes: cardsToPlayers[numPlayers],
      rounds: 3,
    }
  },

  moves: {
    placeCard(G, ctx) {

    },
  },

  victory: (G, ctx) => {
    return isGameOver(G.rounds)
  },

  flow: (ctx, action, G) => {
    // Distribute hands for initial setup?
    // Handle card placement => create copy of hand missing choice
    // Handle all players choosing => reveal, rotate hand
    return {...ctx}
  }
});

export default SushiGo;
