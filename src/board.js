import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
    return (
        <td
            id={props.value}
            className='square'
            // onDragOver={props.onDragOver}
            >
            {props.value}
        </td>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(64).fill(null)
        }
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

        return <tr><td className={'row ' + row}>{row}</td>{rows}</tr>

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