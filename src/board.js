import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
    return (
        <td
            id={props.value}
            className='square'
            onDragOver={props.onDragOver}>
            {props.value}

        </td>
    )
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square 
                value={this.props.squares[i]}
                onDragOver={() => this.props.onDragOver(i)}
            />
        );
    }
    
    render() {
        return (
            <div className='game-board'>
                <table>
                    <tr>
                        <th></th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                        <th>G</th>
                        <th>H</th>
                    </tr>
                    {for (let i = )}

                </table>

            </div>
        )
    }
}