import React from "react"
import style from './Examples.module.css';
import {i18n} from "../../lib/i18n/i18n";
import AudioPlayer from "./AudioPlayerUnfixt/AudioPlayer";

const Examples = (props) => {
    return(
        <div className={style.container}>
            <p className={style.header}>
                <span className={style.title}>
                    { i18n.text("title") }
                </span>
                {i18n.text("examples/title")}
            </p>
            <AudioPlayer props={props.examples}/>
        </div>
    )
}
export default Examples
