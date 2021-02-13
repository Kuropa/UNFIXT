import React, {useState} from 'react';
import styles from './ABExample.module.css';
import {i18n} from '../../../lib/i18n/i18n';
import ReactWaves from '@dschoon/react-waves';

const ABExample = (props) => {
    const [colorAfter, setColorToAfter] = useState(styles.blue)
    const [colorBefore, setColorToBefore] = useState(styles.black)
    const [playButton, setPlayButton] = useState(styles.play)
    const [playing, setPlaying] = useState(false)
    const [hiddenAfter, setShowAfter] = useState(styles.waveShow)
    const [hiddenBefore, setShowBefore] = useState(styles.waveHidden)
    const [mBefore, setMuteBefore] = useState(0)
    const [mAfter, setMuteAfter] = useState(1)
    const [position, setPosition] = useState(0)

    const handleClick = () => {
        if (playing === false) {
            play();
            return
        }
        pause()
    }

    const handleMuteAfter = () => {
        muteAfter()
    }
    const handleMuteBefore = () => {
        muteBefore()
    }

    // const handleStopped = useCallback(() => {
    //     stop();
    // }, [])

    const play = () => {
        setPlaying(true)
        setPlayButton(styles.pause)
    }

    const pause = () => {
        setPlaying(false)
        setPlayButton(styles.play)
    }

    const muteAfter = () => {
        setShowAfter(styles.waveHidden)
        setShowBefore(styles.waveShow)
        setColorToAfter(styles.black)
        setColorToBefore(styles.blue)
        setMuteAfter(0)
        setMuteBefore(1)
    }

    const muteBefore = () => {
        setShowAfter(styles.waveShow)
        setShowBefore(styles.waveHidden)
        setColorToAfter(styles.blue)
        setColorToBefore(styles.black)
        setMuteBefore(0)
        setMuteAfter(1)
    }

    // const stop = () => {
    //     setPlayButton(styles.play)
    // }

    const handlePosChange = (e) => {
        setPosition(Math.round(e))
        // console.log(position)
    }

    let audioFiles = props.audio.map(el => (
        <div key={el.before}>
            <div className={styles.wavesContainer}>
                <div style={{position: 'absolute'}}>
                    <ReactWaves
                        audioFile={el.before}
                        className={`${hiddenBefore}`}
                        options={{
                            barHeight: 1.5,
                            barGap: 2,
                            barWidth: 3,
                            cursorWidth: 0,
                            height: 100,
                            hideScrollbar: true,
                            mediaControls: true,
                            scrollParent: true,
                            progressColor: '#10ffff',
                            responsive: true,
                            waveColor: '#ffffff',
                            pixelRatio: '3'
                        }}
                        volume={mBefore}
                        zoom={1}
                        playing={playing}
                        setCurrentTime={position}
                    />
                </div>
                <div>
                    <ReactWaves
                        audioFile={el.after}
                        className={`${hiddenAfter}`}
                        options={{
                            barHeight: 1.5,
                            barGap: 2,
                            barWidth: 3,
                            cursorWidth: 0,
                            height: 100,
                            hideScrollbar: true,
                            mediaControls: true,
                            scrollParent: true,
                            progressColor: '#10ffff',
                            responsive: true,
                            waveColor: '#ffffff',
                            pixelRatio: '3'
                        }}
                        volume={mAfter}
                        zoom={1}
                        pos={position}
                        onPosChange={handlePosChange}
                        playing={playing}
                    />
                </div>
            </div>
        </div>
    ))
    return(
        <div className={styles.playerContainer}>
            <div className={styles.playerWrap}>
                <div className={styles.wrapper}>
                    <div
                        className={playButton}
                        onClick={handleClick}
                    >.</div>
                    <div className={styles.media}>
                        <div>
                            {audioFiles}
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={colorBefore}
                        onClick={handleMuteAfter}
                    >{i18n.text("AB/button/before")}</button>

                    <button className={colorAfter}
                            onClick={handleMuteBefore}
                    >{i18n.text("AB/button/after")}</button>
                </div>
            </div>
        </div>
    )
}

export default ABExample