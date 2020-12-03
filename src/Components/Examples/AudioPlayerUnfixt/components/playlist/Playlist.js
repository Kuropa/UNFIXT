import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import style from './playlist.module.css'

function Playlist() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext)

  return (
    <div className={style.playlist}>
        <ul className={style.listStyle}>
          {
            songs.map((song, i) =>
              <li
                  className={(currentSong === i ? style.selected : '')}
                  key={i}
                  onClick={() => { SetCurrent(i); }}>
                <i></i>
                <div className={style.songWrapper}>
                    <div className={style.prePlay}></div>
                    <p className={style.songName}>
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
