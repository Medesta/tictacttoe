import React, { Component } from 'react';
import Tile from '../Tile/Tile'
import './Board.scss';



class Board extends Component {
    state = {
        game: ['', '', '', '', '', '', '', '', ''],
        turn: 0,
        gameWon: false,
        opt: 0,
        winConditions: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]


    }
    turnChange() {
        const temp = this.state;
        if (temp.turn === 1) {
            temp.turn = 0;
        }
        else {
            temp.turn = 1;
        }
        this.setState({
            turn: temp.turn
        })
    }
    againHandler() {
        const temp = this.state;
        temp.game = ['', '', '', '', '', '', '', '', ''];
        temp.turn = 0;
        temp.gameWon = false;
        temp.opt = 0;
        this.setState({ state: temp })
    }


    selected(a) {
        const temp = this.state;
        // console.log(temp.game[4],"111111111111111111111111111");
        if (temp.game[a] === '') {
            temp.game[a] = temp.turn;
            this.setState({
                game: temp.game,
                opt: temp.opt + 1
            })
            this.checkWon();
            if (!this.state.gameWon) {
                this.turnChange();
            }
        }
        else {
            alert("Block Already Marked");
            // console.log(this.state)
        }

        return;
    }
    checkWon() {
        console.log(this.state, "checkwon");
        const temp = this.state;
        for (let i = 0; i <= 7; i++) {
            const win = temp.winConditions[i];
            let a = temp.game[win[0]];
            let b = temp.game[win[1]];
            let c = temp.game[win[2]];
            console.log(a,b,c ,"win conditions")
            
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                temp.gameWon =true;
                this.setState({ gameWon: temp.gameWon })
                console.log(this.state.gameWon);
                break
            }
        }

    }


    render() {
        const isWon = this.state.gameWon;
        if (!this.state.gameWon && this.state.opt <= 8) {


            return (
                <div>
                    <div className="hover">
                        {isWon ? <h3>Player {this.state.turn + 1} Won the game</h3> : <h3>Game Tied</h3>}
                        <button className="btn" onClick={() => this.againHandler()}>Play Again</button>
                    </div>
                    <h3>Player {this.state.turn + 1}'s turn </h3>
                    <div className="board" >
                        <div className="row row-1">
                            <div className="col-1"><Tile click={() => this.selected(0)} cont={this.state.game[0]} active={this.state.gameWon} /></div>
                            <div className="col-2"><Tile click={() => this.selected(1)} cont={this.state.game[1]} active={this.state.gameWon} /></div>
                            <div className="col-3"><Tile click={() => this.selected(2)} cont={this.state.game[2]} active={this.state.gameWon} /></div>
                        </div>
                        <div className="row row-2">
                            <div className="col-1"><Tile click={() => this.selected(3)} cont={this.state.game[3]} active={this.state.gameWon} /></div>
                            <div className="col-2"><Tile click={() => this.selected(4)} cont={this.state.game[4]} active={this.state.gameWon} /></div>
                            <div className="col-3"><Tile click={() => this.selected(5)} cont={this.state.game[5]} active={this.state.gameWon} /></div>
                        </div>
                        <div className="row row-3">
                            <div className="col-1"><Tile click={() => this.selected(6)} cont={this.state.game[6]} active={this.state.gameWon} /></div>
                            <div className="col-2"><Tile click={() => this.selected(7)} cont={this.state.game[7]} active={this.state.gameWon} /></div>
                            <div className="col-3"><Tile click={() => this.selected(8)} cont={this.state.game[8]} active={this.state.gameWon} /></div>
                        </div>
                    </div>
                </div>
            );
        }
        else {

            return (
                <div className="container">
                    <div className="hover down">
                        {isWon ? <h3>Player {this.state.turn + 1} Won the game</h3> : <h3>Game Tied</h3>}
                        <button className="btn" onClick={() => this.againHandler()}>Play Again</button>
                    </div>
                    <h3>Player {this.state.turn + 1}'s turn </h3>
                    <div className="board filter">
                        <div className="row row-1">
                            <div className="col-1"><Tile click={() => this.selected(0, 0)} cont={this.state.game[0][0]} active={this.state.gameWon} /></div>
                            <div className="col-2"><Tile click={() => this.selected(0, 1)} cont={this.state.game[0][1]} active={this.state.gameWon} /></div>
                            <div className="col-3"><Tile click={() => this.selected(0, 2)} cont={this.state.game[0][2]} active={this.state.gameWon} /></div>
                        </div>
                        <div className="row row-2">
                            <div className="col-1"><Tile click={() => this.selected(1, 0)} cont={this.state.game[1][0]} active={this.state.gameWon} /></div>
                            <div className="col-2"><Tile click={() => this.selected(1, 1)} cont={this.state.game[1][1]} active={this.state.gameWon} /></div>
                            <div className="col-3"><Tile click={() => this.selected(1, 2)} cont={this.state.game[1][2]} active={this.state.gameWon} /></div>
                        </div>
                        <div className="row row-3">
                            <div className="col-1"><Tile click={() => this.selected(2, 0)} cont={this.state.game[2][0]} active={this.state.gameWon} /></div>
                            <div className="col-2"><Tile click={() => this.selected(2, 1)} cont={this.state.game[2][1]} active={this.state.gameWon} /></div>
                            <div className="col-3"><Tile click={() => this.selected(2, 2)} cont={this.state.game[2][2]} active={this.state.gameWon} /></div>
                        </div>
                    </div>
                </div>
            )

        }
    }

}
export default Board;