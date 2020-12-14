import React from "react";
import style from './Prices.module.css'
import {i18n} from "../../lib/i18n/i18n";

const Prices = (props) => {
    return (
        <div id='Price' className={style.prices}>
            <p className={style.header}>
                <span>
                    { i18n.text("title") }
                </span>
                {i18n.text("prices/title")}
            </p>
            <p className={style.description}>{i18n.text("prices/description")}</p>
            <div className={style.sliderWrapper}>
                {
                    props.prices.map(s => (
                        <div key={s.serviceType} className={style.priceWrapper}>
                            <h2>{s.serviceType}</h2>
                            <div>
                                <p className={style.p}>{i18n.text("prices/from")}</p>
                                <p className={style.priceText}>{s.servicePrice}</p>
                                <p>{i18n.text("prices/currency")}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Prices
