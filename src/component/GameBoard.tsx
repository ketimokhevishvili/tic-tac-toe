import type {UseTicTacToe} from './hook/useTicTacToe.ts'

interface GameBoardProps {
    hook: UseTicTacToe
}

const GameBoard = (props: GameBoardProps) => {
  return (
      <ol className='flex flex-col gap-2 mx-auto w-fit'>
          {props.hook.gameBoard.map((row, rowIndex) => (
              <li key={rowIndex}
          >
                  <ol className='flex gap-2'>
                      {row.map((playerSymbol, colIndex) => (
                          <li
                          key={colIndex}
                          className='game-square'
                      >
                              <button
                                  className={`game-square ${
                                      playerSymbol === 'x' ? 'game-square-x'
                                          : playerSymbol === 'o' ? 'game-square-o'
                                              : 'game-square-empty'
                                  }`}
                                  onClick={() => props.hook.handleSelectSquare(rowIndex, colIndex)}
                                  disabled={playerSymbol !== null}
                              >
                                  {playerSymbol?.toUpperCase()}
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
