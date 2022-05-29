import React from "react";
import styles from './Prices.module.css'
import {i18n} from "../../lib/i18n/i18n";

const Prices = (props) => {
    return (
        <div itemScope itemType="http://schema.org/ItemList" id='prices' className={styles.prices}>
            <p className={styles.header}>
                <span>
                    { i18n.text("title") }
                </span>
                {i18n.text("prices/title")}
            </p>
            <p className={styles.description}>{i18n.text("prices/description")}</p>
            <div className={styles.sliderWrapper}>
                {
                    props.prices.map(s => (
                        <div itemScope
                             itemProp='itemListElement'
                             itemType='http://schema.org/Product'
                             key={s.serviceType}
                             className={styles.priceWrapper}>
                            <meta itemProp='description' content={s.serviceType}/>
                            <h2 className={styles.cardTitle} itemProp='name'>{s.serviceType}</h2>
                            <div className={styles.cardWrapper}>
                                <div itemScope
                                     itemProp='offers'
                                     itemType='http://schema.org/Offer'
                                     className={styles.circle}>
                                    <p className={styles.p}>{i18n.text("prices/from")}</p>
                                    <p itemProp='price' className={styles.priceText}>{s.servicePrice}</p>
                                    <p>{i18n.text("prices/currency")}</p>
                                    <meta itemProp="priceCurrency" content={i18n.text("prices/currency/meta")}/>
                                    <meta itemProp="availability" content="http://schema.org/InStock"/>
                                </div>
                                <div className={styles.descriptionWrapper}>
                                    <p className={styles.cardFormat}>{s.serviceFormat}</p>
                                    <p className={styles.cardDescription}>{s.serviceDescription}</p>
                                </div>
                                {/*<button className={style.button}>ПОДРОБНЕЕ</button>*/}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Prices
