import React from "react";
import styles from './Socials.module.css';
import {i18n} from "../../../lib/i18n/i18n";

const Socials = (props) => {
    let socialsList = props.socials.map(el => (
        <div key={el.title}><a href={el.href} target='_blank' rel="noopener noreferrer">
            <div className={styles.iconWrapper}>
                <img className={styles.icon} src={el.img} alt={el.title}/>
                <p className={styles.title}>{el.title}</p>
            </div>
        </a></div>
    ))
    return (
        <div className={styles.socials}>
            <p className={styles.header}>{i18n.text("contacts/title_2")}</p>
            <div className={styles.paddingWrap}>
                { socialsList }
            </div>
        </div>
    )
}

export default Socials