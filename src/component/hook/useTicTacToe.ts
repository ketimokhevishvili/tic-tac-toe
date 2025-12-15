import {type Dispatch, type SetStateAction, useState} from 'react'


const initialGameBoard:(string | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export interface GameTurn {
    player: 'x' | 'o'
    square: {
        row: number
        col: number
    }
}

export interface UseTicTacToe {
    gameTurns: GameTurn[]
    setGameTurns: Dispatch<SetStateAction<GameTurn[]>>
    activePlayer: string
    handleSelectSquare: (rowIndex: number, colIndex: number) => void
    gameBoard: (string | null)[][]
}

const useTicTacToe = ():UseTicTacToe => {
    const [gameTurns, setGameTurns] = useState<GameTurn[]>([])

    const gameBoard = initialGameBoard.map(row => [...row])
    for (const turn of gameTurns) {
        const { row, col } = turn.square
        gameBoard[row][col] = turn.player
    }

    const deriveActivePlayer = () => {
        const currentPlayer : 'x' | 'o' = gameTurns.length > 0 && gameTurns[0].player === 'x' ? 'o' : 'x'
        return currentPlayer
    }

    const activePlayer = deriveActivePlayer()

    const handleSelectSquare = (rowIndex: number, colIndex: number) => {
        setGameTurns(prevTurns => {
            const currentPlayer : 'x' | 'o' = activePlayer

            const  updateTurns: GameTurn[]  = [
                { player: currentPlayer,square: { row: rowIndex, col:colIndex } }, ...prevTurns
            ]
            return updateTurns
        })
    }
    return {
        gameTurns,
        setGameTurns,
        activePlayer,
        handleSelectSquare,
        gameBoard
    }
}

export default useTicTacToe
