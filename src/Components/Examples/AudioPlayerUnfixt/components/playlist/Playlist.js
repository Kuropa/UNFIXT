import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import styles from './playlist.module.css'

function Playlist() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext)

  return (
    <div className={styles.playlist}>
        <ul className={styles.listStyle}>
          {
            songs.map((song, i) =>
              <li
                  className={(currentSong === i ? styles.selected : '')}
                  key={i}
                  onClick={() => { SetCurrent(i); }}>
                <i></i>
                <div className={styles.songWrapper}>
                    <div className={styles.prePlay}></div>
                    <p className={styles.songName}>
                        { i + 1 + '. ' + song[0]}
                    </p>
                </div>
              </li>
            )
          }
        </ul>
    </div>
  )
}

export default Playlist
