import Game from 'boardgame.io/game';

/*
  14x Tempura
  14x Sashimi
  14x Dumpling
  12x 2 Maki rolls
  8x 3 Maki rolls
  6x 1 Maki roll
  10x Salmon Nigiri
  5x Squid Nigiri
  5x Egg Nigiri
  10x Pudding
  6x Wasabi
  4x Chopsticks
*/

isGameOver() {
  // Determine hands are empty or rounds completed based on players
}

const cardsToPlayers = [null, null, 10, 9, 8, 7];

const SushiGo = Game({
  setup: (numPlayers) => {
    return {
      rounds: cardsToPlayers[numPlayers],
    }
  }
  moves: {
    placeCard() {

    },
    victory: (G, ctx) => {
      return isGameOver(G.rounds)
    }
  }
});

export default SushiGo;
