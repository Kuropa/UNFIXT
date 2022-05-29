import React from "react";
import style from './Icon.module.css';

const YouTube = ({ href }) => {
    return (
        <div className={style.wrapper}>
            <a href={href} target='blank'>
                <svg className={style.icon}>
                    <path className={style.st0} d="M35,16.3c-0.1-2-0.3-4-0.5-6c-0.3-2.8-2-4.2-4.4-4.4c-2.8-0.2-5.5-0.4-8.3-0.5c-3.1-0.1-6.3,0-9.4,0
	C9.8,5.6,7.3,5.8,4.8,6C2.6,6.2,1.1,7.5,0.7,9.5c-0.2,0.8-0.3,1.7-0.4,2.5C0,14.3,0,16.8,0,19.2c0,2.1,0.2,4.3,0.5,6.4
	C1,27.7,2.2,29,4.2,29.4c1.2,0.2,2.4,0.3,3.6,0.4c3.2,0.2,6.5,0.2,9.7,0.3l0-0.1c1.7,0,3.4,0.1,5.1,0c2.5-0.1,5.1-0.3,7.6-0.5
	c2.2-0.2,3.6-1.5,4.1-3.5c0.2-0.8,0.3-1.7,0.4-2.5C35,21.1,35,18.7,35,16.3z M13.9,23V12.5l9.2,5.2L13.9,23z"/>
                    <polygon className={style.st1} points="23.1,17.7 13.9,23 13.9,12.5 "/>
                </svg>
            </a>
        </div>
    )
}

export default YouTube