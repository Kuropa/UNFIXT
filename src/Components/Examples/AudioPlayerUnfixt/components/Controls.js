import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from '../context/playerContext'
import Playlist from "./playlist/Playlist";
import styles from './Controls.module.css'
import vol from '../../../Media/Icon/vol.svg'
import play from '../../../Media/Icon/play.svg'
import pause from '../../../Media/Icon/pause.svg'
import prev from '../../../Media/Icon/prev.svg'
import next from '../../../Media/Icon/next.svg'

function Controls() {

  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    playing,
    togglePlaying,
    handleEnd,
  } = useContext(playerContext)

  const audio = useRef('audio_tag');

  // self State
  const [stateVolume, setStateVolume] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

  const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleVolume = (q) => {
    setStateVolume(q);
    audio.current.volume = q;
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute
  }

  useEffect(() => {
    audio.current.volume = stateVolume;
    if (playing) { toggleAudio() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])

  return (
    <div className={styles.controls}>
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload='true'
        src={songs[currentSong][1]} />
      <div className={styles.controlsWrapper}>
        <div className={styles.musicControls}>
          {playing ?
              <img alt='pause' src={pause} className={`${styles.icon} ${styles.p}`} onClick={() => { togglePlaying(); toggleAudio(); }}/> :
              <img alt='play' src={play} className={`${styles.icon} ${styles.p}`} onClick={() => { togglePlaying(); toggleAudio(); }}/>
          }
          <img alt='prev' src={prev} className={styles.icon} onClick={prevSong}/>
          <img alt='next' src={next} className={styles.icon} onClick={nextSong}/>
        </div>
        <div className={styles.volume}>
          <img className={styles.volImg} src={vol} alt=""/>
          <input value={Math.round(stateVolume * 100)} type="range" name="volBar" className={styles.volBar} onChange={(e) => handleVolume(e.target.value / 100)} />
        </div>
      </div>
      <div className={styles.progressb}>
        <div className={styles.curtimeWrap}>
          <span>{fmtMSS(currentTime)}</span>
          <span>{fmtMSS(dur)}</span>
        </div>
        <div>
          <input
              onChange={handleProgress}
              value={dur ? (currentTime * 100) / dur : 0}
              type="range"/>
        </div>
      </div>
    </div>
  )
}

export default Controls;
