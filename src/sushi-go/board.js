import React from 'react';
import '../stylesheets/sushi-go.css';

class Board extends React.Component {

  chooseCard(index, card) {
    this.setState(prevState => ({
      chosenCard: card
    }));

    this.props.moves.placeCard(index, this.props.playerID);
    this.props.events.endTurn();
  }

  render() {
    const playerID = this.props.playerID;
    const { hand, playedCards } = this.props.G.players[playerID];
    const handDisplay = React.Children.map(hand, (card, index) => {
      return <button className={'card ' + card} id={index} onClick={() => this.chooseCard(index)}>{card}</button>
    });

    const playedDisplay = React.Children.map(playedCards, (card) => {
      return <div className={'card ' + card}>{card}</div>
    });

    return <div className="sg-board">
      <div className="sg-board__placement">{playedDisplay}</div>
      <div className="sg-board__hand">{handDisplay}</div>
    </div>
  }
}

export default Board;
