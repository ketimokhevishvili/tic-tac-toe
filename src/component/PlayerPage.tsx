import {useState} from 'react'

interface PlayerPageProps {
    initialName: string
    symbol: 'x' | 'o'
    isActive: boolean
    onChangeName: (symbol: string, newName: string) => void
}


const PlayerPage = (props: PlayerPageProps) => {
    const [playerName, setPlayerName] = useState(props.initialName);
    const [isEditing, setIsEditing] = useState(false)


    const editClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
        props.onChangeName(props.symbol,playerName)
    }
}

  return(
      <li className={`flex flex-col items-center gap-2 p-5 rounded-2xl border transition-all duration-300 w-44
    ${props.isActive
          ? 'bg-amber-400/10 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.15)]'
          : 'bg-zinc-800/50 border-zinc-700'
      }`}>
    <span className={`text-3xl font-black ${props.isActive ? 'text-amber-400' : 'text-zinc-500'}`}>
        {props.symbol.toUpperCase()}
    </span>
          {isEditing
              ? <input
                  className='bg-zinc-900 border border-amber-400/50 text-white text-center text-sm rounded-lg px-3 py-1 w-full outline-none focus:border-amber-400'
                  type='text'
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
              />
              : <span className='text-white text-sm font-medium tracking-wide'>{playerName}</span>
          }
          <button
              className={`text-xs uppercase tracking-widest font-bold transition-colors
            ${isEditing ? 'text-amber-400 hover:text-amber-300' : 'text-zinc-500 hover:text-zinc-300'}`}
              onClick={editClick}>
              {isEditing ? '✓ Save' : 'Edit'}
          </button>
      </li>
  )
}

export default PlayerPage
