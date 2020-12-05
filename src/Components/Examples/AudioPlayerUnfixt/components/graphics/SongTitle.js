import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import style from './SongTitle.module.css'

function SongTitle() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <div className={style.header}>
      <p className={style.song}>{songs[currentSong][0]}</p>
    </div>
  )
}

export default SongTitle
