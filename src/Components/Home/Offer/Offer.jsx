import React from "react";
import styles from './Offer.module.css';
import {i18n} from "../../../lib/i18n/i18n";
import { Link } from 'react-scroll';

const Offer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.border}>
                <div>
                    <h1 className={styles.offer}>
                        <span className={styles.tint}>{i18n.text("offer/title_tint")}</span>
                        <span className={styles.blue}>{i18n.text("offer/title")}</span>
                        <span className={styles.bold}>{i18n.text("offer/title_bold")}</span>
                        <span className={styles.blue}>{i18n.text("offer/title_b")}</span>
                        <span className={styles.bold}>{i18n.text("offer/title_s")}</span>
                    </h1>
                </div>
                {/*<div>*/}
                {/*    <Link activeClass="active"*/}
                {/*          to="contacts"*/}
                {/*          className={styles.offerButton}*/}
                {/*          itemProp="url"*/}
                {/*          spy={true}*/}
                {/*          smooth={true}*/}
                {/*          hashSpy={false}*/}
                {/*          offset={-100}*/}
                {/*          duration={500}*/}
                {/*          delay={0}*/}
                {/*          isDynamic={true}*/}
                {/*          ignoreCancelEvents={false}*/}
                {/*    >{i18n.text("offer/button")}*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Offer
