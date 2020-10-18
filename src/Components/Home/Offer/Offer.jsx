import React from "react";
import style from './Offer.module.css';
import {i18n} from "../../../lib/i18n/i18n";

const Offer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.border}>
                <h1 className={style.offer}>{i18n.text("offer/title")} <span className={style.bold}><span className={style.blue}>{i18n.text("offer/title_b")}</span> {i18n.text("offer/title_bold")}</span></h1>
            </div>
        </div>
    )
}

export default Offer
