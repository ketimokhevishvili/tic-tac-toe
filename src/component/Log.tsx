import type {GameTurn} from "./hook/useTicTacToe.ts";


interface LogProps {
    gameTurns: GameTurn[]
}

const Log = (props: LogProps) => {
    return (
        <ol>
            {props.gameTurns.map((turn) =>
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected {turn.square.row},{turn.square.col}
                </li>
            )}
    </ol>

    )
}

export default Log
