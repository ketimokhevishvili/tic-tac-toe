import type {UseTicTacToe} from './hook/useTicTacToe.ts'

interface GameBoardProps {
    hook: UseTicTacToe
}

const GameBoard = (props: GameBoardProps) => {
  return (
      <ol className='flex flex-col gap-2'>
          {props.hook.gameBoard.map((row, rowIndex) => (
              <li key={rowIndex}
          >
                  <ol className='flex gap-2'>
                      {row.map((playerSymbol, colIndex) => (
                          <li
                          key={colIndex}
                          className='game-square'
                      >
                          <button className='w-full h-full flex items-center justify-center text-amber-600'
                                  onClick={ () => props.hook.handleSelectSquare(rowIndex,colIndex)}
                                  disabled={playerSymbol !== null}
                          >{playerSymbol}
                          </button>
                          </li>
                      ))}
                  </ol>
              </li>
          ))}
      </ol>
  )
}

export default GameBoard
