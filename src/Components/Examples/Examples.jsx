import React from 'react';
import styles from './Examples.module.css';
import {i18n} from "../../lib/i18n/i18n";
import AudioPlayer from "./AudioPlayerUnfixt/AudioPlayer";

const Examples = (props) => {
    return(
        <div className={styles.container}>
            <p className={styles.header}>
                <span className={styles.title}>
                    { i18n.text("title") }
                </span>
                {i18n.text("examples/title")}
            </p>
            <p className={styles.description}>{i18n.text("examples/title_s")}</p>
            <AudioPlayer props={props.examples}/>
        </div>
    )
}
export default Examples
