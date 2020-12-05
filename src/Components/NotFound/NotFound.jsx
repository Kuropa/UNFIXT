import React from 'react'
import style from './NotFound.module.css'
import img from '../Media/Icon/404.svg'
import {i18n} from '../../lib/i18n/i18n';
import WebEffect from "../WebEffect/WebEffect";

const NotFound = () => {
    return (
        <div className={style.notFound}>
            <WebEffect class='canvasError'/>
            <div className={style.border}>
                <div className={style.infoWrap}>
                    <img className={style.image} src={img} alt="Page Not Found"/>
                    <div className={style.textWrap}>
                        <p className={style.title}>{i18n.text("error/title")}</p>
                        <a className={style.button} href="http://unfixt.ru">{i18n.text("error/button")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound