import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import style from './SongTitle.module.css'

function SongTitle() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <div className={style.header}>
      <h3 >{songs[currentSong][0]}</h3>
    </div>
  )
}

export default SongTitle
