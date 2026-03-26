import {type Dispatch, type SetStateAction, useState} from 'react'
import winningCombinations from '../../../src/core/helper/winningComination.json'

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

export interface winnerCell {
    row: number;
    column: number;
}
export type WinningCombinations = winnerCell[]

export interface UseTicTacToe {
    gameTurns: GameTurn[]
    setGameTurns: Dispatch<SetStateAction<GameTurn[]>>
    deriveActivePlayer: () => 'x' | 'o'
    handleSelectSquare: (rowIndex: number, colIndex: number) => void
    gameBoard: (string | null)[][]
    checkWinner: () => string | null
    hasDraw: boolean
    updateContent: () => void
    playerNameChanged: (symbol: string, newName: string) => void
    players: { x: string, o: string }
}

const useTicTacToe = ():UseTicTacToe => {
    const [gameTurns, setGameTurns] = useState<GameTurn[]>([])
    const [players, setPlayers] = useState({x:'player 1', o:'player 2'})

    const gameBoard = initialGameBoard.map(row => [...row])
    for (const turn of gameTurns) {
        const { row, col } = turn.square
        gameBoard[row][col] = turn.player
    }

    const deriveActivePlayer = () => {
        const currentPlayer : 'x' | 'o' = gameTurns.length > 0 && gameTurns[0].player === 'x' ? 'o' : 'x'
        return currentPlayer
    }

    const updateContent = () => {
        setGameTurns([])
    }

    const handleSelectSquare = (rowIndex: number, colIndex: number) => {
        setGameTurns(prevTurns => {
            const currentPlayer : 'x' | 'o' = deriveActivePlayer()

            const  updateTurns: GameTurn[]  = [
                { player: currentPlayer,square: { row: rowIndex, col:colIndex } }, ...prevTurns
            ]
            return updateTurns
        })
    }

    const playerNameChanged = (symbol: string ,newName: string) => {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        })
    }

    const checkWinner  = () => {
        for (const combination of winningCombinations as WinningCombinations[]) {
            const firstSquare = gameBoard[combination[0].row][combination[0].column]
            const secondSquare = gameBoard[combination[1].row][combination[1].column]
            const thirdSquare = gameBoard[combination[2].row][combination[2].column]

            if (firstSquare && firstSquare === secondSquare && secondSquare === thirdSquare) {
                return players[firstSquare as 'x' | 'o']
            }

        }
        return null
    }
    const hasDraw = gameTurns.length === 9 && !checkWinner()


    return {
        gameTurns,
        setGameTurns,
        deriveActivePlayer,
        handleSelectSquare,
        gameBoard,
        checkWinner,
        hasDraw,
        updateContent,
        playerNameChanged,
        players
    }
}

export default useTicTacToe
