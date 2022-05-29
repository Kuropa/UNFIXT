import React from "react";
import styles from './ABExamples.module.css';
import ABExample from "./ABExample/ABExample";
import {i18n} from "../../lib/i18n/i18n";

const ABExamples = (props) => {
    return(
        <div data-aos="fade" data-aos-offset='300' className={styles.ABExamplesContainer}>
            <h1 className={styles.title}>{i18n.text("ABExamples/title")}
                <span className={styles.bold}>
                    <span className={styles.blue}>{i18n.text("ABExamples/title_b")}</span> <span>{i18n.text("ABExamples/title_s")}</span> {i18n.text("ABExamples/title_bold")}</span>
            </h1>
            <p className={styles.subtitle}>{i18n.text("AB/title_s")}</p>
            <ABExample audio={props.audio}/>
        </div>
    )
}

export default ABExamples