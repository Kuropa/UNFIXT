import React from "react";
import styles from './Offer.module.css';
import {i18n} from "../../../lib/i18n/i18n";

const Offer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.border}>
                <h1 className={styles.offer}>{i18n.text("offer/title")}
                 <span className={styles.bold}>
                    <span className={styles.blue}>{i18n.text("offer/title_b")}</span> <span>{i18n.text("offer/title_s")}</span> {i18n.text("offer/title_bold")}</span>
                </h1>
            </div>
        </div>
    )
}

export default Offer
