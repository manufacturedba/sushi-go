import { Game, PlayerView, TurnOrder } from 'boardgame.io/core';

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
  return arr.splice(index, 1).pop();
}

function dealHand(count) {
  const hand = [];
  for (var i = 0; i <= count; i++) {
    hand.push(pullRandom(deck));
  }

  return hand;
}

function isGameOver(game) {
  if (game.currentRound > game.rounds) {
    return true;
  }
}

function rotateHand(game) {
  const players = {...game.players};
  const length = Object.keys(players).length;
  let firstHand = players[0].hand;

  for (var i = 0; i < length; i++) {
    if (i === length - 1) {
      players[i].hand = firstHand;
    } else {
      players[i].hand = players[i + 1].hand;
    }
  }

  return {...game, players };
}

const cardsToPlayers = [null, null, 10, 9, 8, 7];

const SushiGo = Game({
  setup: (numPlayers) => {
    const players = {};
    const cardCount = cardsToPlayers[numPlayers];
    const G = {
      passes: cardCount,
      rounds: 3,
      currentRound: 1,
    }

    for (var i = 0; i < numPlayers; i++) {
      players[i] = {
        score: 0,
        hand: dealHand(cardCount),
        playedCards: [],
      }
    }

    G.players = players;
    return G;
  },

  playerView: PlayerView.STRIP_SECRETS,

  moves: {
    placeCard: (G, ctx, cardIndex, playerID) => {
      console.log(G);
      const player = G.players[playerID];
      const { score } = player;
      const hand = [...player.hand];
      const playedCards = player.playedCards.concat(hand.splice(cardIndex, 1));

      return {
        ...G,
        players: {
          ...G.players,
          [playerID]: {
            score,
            hand,
            playedCards
          }
        },
      }
    },
  },

  victory: (G, ctx) => {
    return isGameOver(G)
  },

  flow: {
    movesPerTurn: 1,

    phases: [
      {
        name: 'play phase',
        allowedMoves: ['placeCard'],
        turnOrder: TurnOrder.ANY,
        onPhaseEnd: (G) => {
          return rotateHand(G);
        }
      }
    ]
  },
});

export default SushiGo;
