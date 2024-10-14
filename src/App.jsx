import  { useState } from 'react';
import Board from './Board';
import './App.css';

const App = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    
    const handleClick = (i) => {
        const newSquares = squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? "X":"O";
        setSquares(newSquares);
        
        setXIsNext(!xIsNext);
        
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];

            }
        }
        return null;
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner Of The Game is: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <h2 className="game-status">{!winner ?status :"Game Over"}</h2>
            <Board squares={squares} onClick={handleClick} />
            <h1>{winner ? status :"Play Smarter"}</h1>
        </div>
    );
};

export default App;
