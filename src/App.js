import { Client } from 'boardgame.io/client';
import SushiGo from './sushi-go/game';
import Board from './sushi-go/board';

const App = Client({ game: SushiGo, board: Board });

export default App;
