import Client from 'boardgame.io/client';
import SushiGo from '../sushi-go/game';

const App = Client({ game: SushiGo });

export default App;
