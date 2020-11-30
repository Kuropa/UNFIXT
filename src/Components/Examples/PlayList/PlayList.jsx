import React, {useState} from "react"
import style from './PlayList.module.css'
import start from '../../Media/Icon/playHover.svg'

const PlayList = (props) => {
    const [toggledColorId, setToggledColorId] = useState(null);

    const toggleColor = (song) => {
        setToggledColorId(song.id);
    }

    return (
        <div className={style.examplesWrap}>
            <div className={style.examples}>
                {props.examples.map(song => {
                    const isToggled = song.id === toggledColorId;
                    return (
                        <div className={style.examplesItem}>
                            <div key={song.id}
                                 className={isToggled ? style.blue : style.white}
                                 onClick={() => toggleColor(song)}>
                                <img src={start} alt="play" className={style.startButton}/>
                                <h4 className={style.artistName}>{song.artistName}</h4>
                                <p className={style.defis}> — </p>
                                <p className={style.songName}>{song.songName}</p>
                                <audio
                                    src={song.audio}
                                    autoPlay={false}
                                    key='audio'
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlayList
