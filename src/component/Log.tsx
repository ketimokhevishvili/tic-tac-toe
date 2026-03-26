import type {GameTurn} from "./hook/useTicTacToe.ts";


interface LogProps {
    gameTurns: GameTurn[]
    players: { x: string, o: string }
}

const Log = (props: LogProps) => {
    return (
        <div className='ml-4 mt-4 sm:mt-6 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 max-h-36 sm:max-h-48 overflow-y-auto'>
            <p className='text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3'>Move History</p>
            <ol className='space-y-1'>
                {props.gameTurns.map(({ player, square: { row, col } }) => (
                    <li key={`${row}${col}`}
                        className='text-sm text-zinc-400 flex items-center gap-2'>
                <span className={`font-bold ${player === 'x' ? 'text-amber-400' : 'text-sky-400'}`}>
                    {props.players[player]}
                </span>
                        <span className='text-zinc-600'>→</span>
                        <span>({row + 1}, {col + 1})</span>
                    </li>
                ))}
            </ol>
        </div>

    )
}

export default Log
