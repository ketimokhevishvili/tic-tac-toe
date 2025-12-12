import PlayerPage from "./PlayerPage.tsx";
import GameBoard from "./GameBoard.tsx";
import {useState} from "react";

const MainPage = () => {
    const [currentPlayer, setCurrentPlayer] = useState<'x'|'o'>('o')
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
                      isActive={currentPlayer === 'o'}
                  />
                  <PlayerPage
                      initialName='player 2'
                      symbol='X'
                      isActive={currentPlayer === 'x'}
                  />
              </ol>
              <GameBoard  currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
          </div>
      </div>
  )
}

export default MainPage
