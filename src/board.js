import React from 'react';
import ReactDOM from 'react-dom';
import Piece from './Components/piece';

function Square(props) {
    let piece = '';
    if (Board.state.gameState[props.value] != '') {
        piece = '<P'

    }
    
    return (
        <td
            id={props.value}
            className='square'
            // onDragOver={props.onDragOver}
            >
            {props.value}
            {
            }
        </td>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // chess board state in a 1x 64 array. syntax: ['piece ID' , position info (, counter)]  
            // piece ID breakdown: first letter is type of piece (r foor rook, n for knight, b for bishop, q for queen, k for king, p for pawn)
            // position info is square ID where piece is located. goes from 0-63
            // counter info is for moves such as castling and pawn moves. might consider removing it for pieces that do not needed but added an empty string for readability.
            gameState: [["rW1",0,0], ["nW1",1,''], ["bW1",2,''], ["qW1",3,''], ["kW1",4,''], ["bW2",5,''], ["nW2",6,''], ["rW2",7,0],
                        ["pW1",8,0], ["pW2",9,0], ["pW3",10,0], ["pW4",11,0], ["pW5",12,0], ["pW6",13,0], ["pW7",14,0], ["pW8",15,0],
                        "", "", "", "", "", "", "", "",
                        "", "", "", "", "", "", "", "",
                        "", "", "", "", "", "", "", "",
                        "", "", "", "", "", "", "", "",
                        ["pB1",48,0], ["pB2",49,0], ["pB3",50,0], ["pB4",51,0], ["pB5",52,0], ["pB6",53,0], ["pB7",54,0], ["pB8",55,0],
                        ["rB1",56,0], ["nB1",57,''], ["bB1",58,''], ["qB1",59,''], ["kB1",60,''], ["bB2",61,''], ["nB2",62,''], ["rB2",63,0]]
        };
    }

    renderSquare(i) {
        return (
            <Square 
                value={i}
                // onDragOver
                key={i}
            />
        )
    }

    renderRow(row) {
        var rows = [];
        for( let i = (8 * (row - 1)); i < (row * 8); i++) {
            rows.push(this.renderSquare(i))
        }

        return <tr><th className={'row ' + row}>{row}</th>{rows}</tr>

    }

    render() {
        return (
            <div className='game-board'>
                <table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                            <th>E</th>
                            <th>F</th>
                            <th>G</th>
                            <th>H</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                    {this.renderRow(8)}
                    {this.renderRow(7)}
                    {this.renderRow(6)}
                    {this.renderRow(5)}
                    {this.renderRow(4)}
                    {this.renderRow(3)}
                    {this.renderRow(2)}
                    {this.renderRow(1)}
                    </tbody>

                    <tfoot>
                        <tr>
                            <th> </th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                            <th>E</th>
                            <th>F</th>
                            <th>G</th>
                            <th>H</th>
                        </tr>
                    </tfoot>
                        



                </table>

            </div>
        )
    }
}

export default Board;