import PlayerPage from './PlayerPage.tsx'
import GameBoard from './GameBoard.tsx'
import Log from './Log.tsx'
import useTicTacToe from './hook/useTicTacToe.ts'
import GameOverModal from './GameOverModal.tsx'


const MainPage = () => {
    const hook = useTicTacToe()
    return (
        <div className='min-h-screen bg-zinc-950 flex  items-center justify-center p-4 sm:p-6'>
            <div className='w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl'>
                <h1 className='text-center text-5xl font-black tracking-[0.2em] uppercase text-white mb-2'>
                    Tic <span className='text-amber-400'>Tac</span> Toe
                </h1>
                <p className='text-center text-zinc-500 text-xs tracking-widest uppercase mb-10'>Two Player Game</p>
                <div className='flex flex-col min-[500px]:flex-row gap-6 items-start justify-center w-full max-w-4xl'>
                    <div className='bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl w-full min-[500px]:flex-1'>
                        <ol className='flex items-center justify-between gap-4 mb-8'>
                            <PlayerPage
                                initialName='player 1'
                                symbol='x'
                                isActive={hook.deriveActivePlayer() === 'x'}
                                onChangeName={hook.playerNameChanged}
                            />
                            <PlayerPage
                                initialName='player 2'
                                symbol='o'
                                isActive={hook.deriveActivePlayer() === 'o'}
                                onChangeName={hook.playerNameChanged}
                            />
                        </ol>
                        {(hook.checkWinner() || hook.hasDraw) &&
                            <GameOverModal winner={hook.checkWinner()} update={hook.updateContent}/>}
                        <GameBoard hook={hook}
                        />
                    </div>
                    <div className='w-full min-[500px]:w-56 min-[500px]:sticky min-[500px]:top-6 min-[500px]:self-start'>
                        <Log gameTurns={hook.gameTurns} players={hook.players}/>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default MainPage
