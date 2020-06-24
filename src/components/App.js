import React, {Component} from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score:0,
        id: 2
      },
      {
        name: "Ashley",
        score:0,
        id: 3
      },
      {
        name: "James",
        score:0,
        id: 4
      }
    ]
  };

  //Player id counter
   prevPlayerID = 4;

  handleScoreChange = (index, changeAmt) => {
    this.setState( prevState => ({
        score: prevState.players[index].score += changeAmt
    }));
}

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) =>{
    this.setState( prevState => {
      return{
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerID +=1
          }
        ]
      };
      
    });
  }

  findHighestScore = () =>{
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if(highScore != 0){
      return highScore;
    }
    else{
      return null;
    }
  }

  render() {
    const highScore = this.findHighestScore();
    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore == player.score}          
          />
        )}

        {/* Add Player Form*/}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
