import Server = require('boardgame.io/server');
import SushiGo from './src/sushi-go/game';

const app = Server({ game: SushiGo });

app.listen(8000);
