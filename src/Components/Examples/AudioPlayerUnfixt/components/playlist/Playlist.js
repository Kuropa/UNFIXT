import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import style from './playlist.module.css'
import play from '../../../../Media/Icon/playHover.svg'

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
                    <img
                        className={style.playHover}
                        src={play}
                        alt=""
                    />
                    <span>{song[0]}</span>
                </div>
              </li>
            )
          }
        </ul>
    </div>
  )
}

export default Playlist
