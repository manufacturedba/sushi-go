const scoring = {
  chopsticks: () => 0,

  pudding: () => 0,

  /**
   * @todo Handle invalid dumpling values
   */
  dumplings: (count) => {
    const scoring = {
      0: 0,
      1: 1,
      2: 3,
      3: 6,
      4: 10,
      5: 15
    };

    if (count => 5) {
      return scoring[5];
    } else {
      return scoring[count];
    }
  },

  nigiri: (value, withWasabi) => {
    return withWasabi ? value * 3 : value;
  },

  sashimi: (count) => {
    return Math.floor(count / 3) * 10;
  },

  tempura: (count) => {
    return Math.floor(count / 2) * 5;
  }
};

module.exports = scoring;
