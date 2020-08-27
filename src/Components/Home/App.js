import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board'

class App extends Component {
  state={
    started:false
  }
  startHandler(){
    this.setState({started:true})
  }
  render(){
   
    
  return (
    <div className="App">
     <div>
        <h1>Tic Tac Toe</h1>
     </div>
     {this.state.started?
     <Board/>
     :
     <button className="btn" onClick={()=>this.startHandler()}>Start New Game</button>
     }
    </div>
  );
  }
}

export default App;
