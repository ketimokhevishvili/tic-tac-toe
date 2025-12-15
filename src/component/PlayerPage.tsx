import {useState} from 'react'

interface PlayerPageProps {
    initialName: string
    symbol: 'o' | 'X'
    isActive: boolean
}

const PlayerPage = (props: PlayerPageProps) => {
    const [playerName, setPlayerName] = useState(props.initialName);
    const [isEditing, setIsEditing] = useState(false)
  return(
      <li className={`flex  items-center justify-center p-3 rounded-lg transition-all duration-200 ${
          props.isActive ? "bg-amber-500 text-white shadow-lg" : "bg-gray-700 text-gray-200"
      }`}>
          <span className='mx-auto px-4'>
              {isEditing
                  ? <input
                      className='bg-gray-800 text-white player-container player-border'
                      type='text'
                      required
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                  />
                  : <span className='text-white'>{playerName}</span>
              }
              <span className='ml-5 text-white'>{props.symbol}</span>
          </span>
          <button
              className='pl-2 text-amber-600'
              onClick={() => setIsEditing((editing) => !editing)} >
              {isEditing ? 'Save' : 'Edit'}
          </button>
      </li>
  )
}

export default PlayerPage
