import {useState} from "react";

const initialGameBoard:(string | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

interface GameBoardProps {
    currentPlayer: 'x' | 'o'
    setCurrentPlayer: (player: 'x'| 'o') => void
}

const GameBoard = (props: GameBoardProps) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)
  return (
      <ol className='flex flex-col gap-2'>
          {gameBoard.map((row, rowIndex) => (<li
              key={rowIndex}
          >
                  <ol className='flex gap-2'>
                      {row.map((playerSymbol, colIndex) => (<li
                          key={colIndex}
                          className='game-square'
                      >
                          <button className='w-full h-full flex items-center justify-center text-amber-600' onClick={ () => {
                              setGameBoard(prevGameBoard => {
                              const updaterBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
                              updaterBoard[rowIndex][colIndex] = props.currentPlayer
                              return updaterBoard
                          })
                              props.setCurrentPlayer(props.currentPlayer === 'x' ? 'o' : 'x')
                          }}>{playerSymbol}</button></li>))}
                  </ol>


              </li>))}
      </ol>
  )
}

export default GameBoard
