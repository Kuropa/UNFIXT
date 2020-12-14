import React from "react";
import style from './Socials.module.css';
import {i18n} from "../../../lib/i18n/i18n";

const Socials = (props) => {
    let socialsList = props.socials.map(el => (
        <div key={el.title}><a href={el.href} target='_blank' rel="noopener noreferrer">
            <div className={style.iconWrapper}>
                <img className={style.icon} src={el.img} alt={el.title}/>
                <p className={style.title}>{el.title}</p>
            </div>
        </a></div>
    ))
    return (
        <div className={style.socials}>
            <p className={style.header}>{i18n.text("contacts/title_2")}</p>
            <div className={style.paddingWrap}>
                { socialsList }
            </div>
        </div>
    )
}

export default Socials