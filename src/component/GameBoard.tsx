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
                          <button className={`aspect-square w-full text-4xl font-black rounded-xl border transition-all duration-200
                            ${playerSymbol === 'x' ? 'text-amber-400 border-amber-400/30 bg-amber-400/5' 
                              : playerSymbol === 'o' ? 'text-sky-400 border-sky-400/30 bg-sky-400/5' :
                             'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50 hover:border-zinc-500 text-transparent'}`}
                                  onClick={ () => props.hook.handleSelectSquare(rowIndex,colIndex)}
                                  disabled={playerSymbol !== null}
                          >{playerSymbol?.toUpperCase()}
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
