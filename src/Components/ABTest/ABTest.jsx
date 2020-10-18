import React, { useState } from "react";
import style from './ABTest.module.css';
import playIcon from '../Media/Icon/ABplay.svg';
import pauseIcon from '../Media/Icon/ABpause.svg';
import {i18n} from "../../lib/i18n/i18n";

const ABTest = (props) => {
    const Before = React.createRef();
    const After = React.createRef();

    const black  = {
        backgroundColor : '#1C1B1B',
        color : '#ffffff',
        border : '1px solid #ffffff'
    }
    const blue  = {
        backgroundColor : '#10ffff',
        color : '#000000',
        border : '1px solid #10ffff'
    }

    const playBack = {
        backgroundImage: `url(${playIcon})`
    }
    const pauseBack = {
        backgroundImage: `url(${pauseIcon})`
    }

    const [colorAfter, setColorToAfter] = useState(blue)
    const [colorBefore, setColorToBefore] = useState(black)
    const [background, setBackground] = useState(playBack)

    const play = () => {
        Before.current.paused ? Before.current.play(setBackground(pauseBack)) : Before.current.pause(setBackground(playBack))
        After.current.paused ? After.current.play() : After.current.pause()
    }

    const muteBefore = () => {
        setColorToAfter(black)
        setColorToBefore(blue)
        Before.current.muted = true
        After.current.muted = false
    }

    const muteAfter = () => {
        setColorToAfter(blue)
        setColorToBefore(black)
        Before.current.muted = false
        After.current.muted = true
    }

    let audioFiles = props.audio.map(el => (
        <div>
            <audio onEnded={() => setBackground(playBack)} id='before' ref={Before} src={el.before}>Your browser does not support the<code>audio</code></audio>
            <audio id='after' ref={After} src={el.after} muted='muted'>Your browser does not support the<code>audio</code></audio>
        </div>
    ))
    return(
        <div>
            <div className={style.buttons}>
                {audioFiles}
                <button
                    className={style.beforeButton}
                    onClick={muteAfter}
                    style={colorAfter}
                >{i18n.text("AB/button/before")}</button>
                <div
                    className={style.play}
                    onClick={play}
                    style={background}
                >.</div>
                <button className={style.afterButton}
                        onClick={muteBefore}
                        style={colorBefore}
                >{i18n.text("AB/button/after")}</button>
            </div>
        </div>
    )
}

export default ABTest