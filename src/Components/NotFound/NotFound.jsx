import React from 'react'
import styles from './NotFound.module.css'
import img from '../Media/Icon/404.svg'
import {i18n} from '../../lib/i18n/i18n';
import WebEffect from "../WebEffect/WebEffect";

const NotFound = ({ location }) => {
    return (
        <div className={styles.notFound}>
            <WebEffect class='canvasError'/>
            <div className={styles.border}>
                <div className={styles.infoWrap}>
                    <img className={styles.image} src={img} alt="Page Not Found"/>
                    <div className={styles.textWrap}>
                        <p className={styles.title}>{i18n.text("error/title")}</p>
                        <a className={styles.button} href="http://unfixt.ru">{i18n.text("error/button")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound