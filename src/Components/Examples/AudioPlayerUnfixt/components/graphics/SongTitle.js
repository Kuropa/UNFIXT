import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import styles from './SongTitle.module.css'

function SongTitle() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <div className={styles.header}>
      <p className={styles.song}>{songs[currentSong][0]}</p>
    </div>
  )
}

export default SongTitle
