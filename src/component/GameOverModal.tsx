// import {useEffect} from "react";

interface GameOverProps {
    winner: string | null
    update: () => void
 }

const gameOverModal = (props: GameOverProps) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50'>
            <div className='bg-zinc-900 border border-zinc-700 rounded-3xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden'>
                <div className='h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400' />
                <div className='px-8 py-10 text-center'>
                    <p className='text-zinc-400 text-xs uppercase tracking-[0.3em] mb-3'>Game Over</p>
                    {props.winner
                        ? <>
                            <h2 className='text-4xl font-black text-white mb-1'>{props.winner}</h2>
                            <p className='text-amber-400 text-sm tracking-widest uppercase'>Winner!</p>
                        </>
                        : <h2 className='text-3xl font-black text-zinc-300'>It's a Draw!</h2>
                    }
                    <button
                        className='mt-8 w-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm uppercase tracking-widest py-3 rounded-xl transition-colors duration-200'
                        onClick={props.update}>
                        Rematch!
                    </button>
                </div>
            </div>
        </div>
    )
 }

 export default gameOverModal