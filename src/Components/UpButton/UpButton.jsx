import React from 'react'
import { useState } from 'react';
import cn from 'classnames';
import arrow from '../Media/Icon/arrow.svg';
import styles from './UpButton.module.css';
import {i18n} from "../../lib/i18n/i18n";
import {Link} from "react-scroll";

const UpButton = () => {
    const [hidden, setVisible] = useState(styles.hidden);

    window.onscroll = function() {scrollFunction()};

    const scrollFunction = () => {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            setVisible(styles.visible)
        } else {
            setVisible(styles.hidden)
        }
    }

    return(
        <div className={styles.upBtnWrap}>
            <Link activeClass="active"
                  to="menu"
                  className={cn(styles.upButton, hidden)}
                  spy={true}
                  smooth={true}
                  hashSpy={false}
                  offset={-100}
                  duration={500}
                  delay={0}
                  isDynamic={true}
                  ignoreCancelEvents={false}
            >
                <img className={styles.arrow} src={arrow} alt={i18n.text("menu/goToUp")}/>
            </Link>
        </div>
    )
}

export default UpButton