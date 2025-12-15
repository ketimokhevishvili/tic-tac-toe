import PlayerPage from './PlayerPage.tsx'
import GameBoard from './GameBoard.tsx'
import Log from './Log.tsx'
import useTicTacToe  from './hook/useTicTacToe.ts'

const MainPage = () => {
const hook = useTicTacToe()
  return (
      <div className="min-h-screen flex flex-col items-center justify-center ">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8">
              Tic Tac Toe
          </h1>
          <div className='w-[600px] h-auto bg-[#35383d]'>
              <ol className='flex items-center justify-between h-24 px-4'>
                  <PlayerPage
                      initialName='player 1'
                      symbol='o'
                      isActive={hook.activePlayer === 'o'}
                  />
                  <PlayerPage
                      initialName='player 2'
                      symbol='X'
                      isActive={hook.activePlayer === 'x'}
                  />
              </ol>
              <GameBoard  hook={hook}
              />
          </div>
          <Log gameTurns={hook.gameTurns}/>
      </div>
  )
}

export default MainPage
