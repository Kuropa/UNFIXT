import React from "react";
import style from './Icon.module.css';

const Spotify = ({ href }) => {
    return (
        <div className={style.wrapper}>
            <a href={href}>
                <svg className={style.icon}>
                    <path className={style.st0} d="M17.6,0.5C8.1,0.5,0.5,8,0.5,17.4c0,9.5,7.5,17.1,16.9,17.1c9.5,0,17.1-7.5,17.1-16.9C34.5,8.2,27,0.5,17.6,0.5
	z M25.5,24.9c-0.5,1.1-1.4,0.7-2.2,0.3c-4.4-2.4-9.1-2.4-13.9-1.4c-0.9,0.2-1.7,0.1-1.9-0.9c-0.2-1.1,0.7-1.4,1.5-1.5
	c1.9-0.3,3.9-0.5,5.8-0.8c3.4,0.1,6.6,0.9,9.6,2.4C25.2,23.4,26,23.9,25.5,24.9z M27.7,20.2c-0.2,1-1.3,1.4-2.3,0.8
	c-4-2.2-8.3-2.9-12.8-2.6c-1.2,0.1-2.5,0.3-3.7,0.6c-1.1,0.2-1.9,0-2.2-1c-0.4-1.1,0.4-1.7,1.4-1.9c2.1-0.5,4.3-0.8,5.6-1
	c5.1,0.2,9.2,1,12.9,3.2C27.3,18.7,28,19.2,27.7,20.2z M27.2,15.5c-2.2-0.8-4.5-1.7-6.8-2.2c-4-0.9-8-0.8-12,0.2
	c-0.1,0-0.3,0.1-0.5,0.1c-1.2,0.3-2.1-0.2-2.3-1.2C5.3,11.3,6,10.5,7,10.3c1.8-0.4,3.7-0.7,5.5-1c0.8-0.1,1.7,0,2.2,0
	c4.4-0.1,8.2,0.6,11.8,2c0.8,0.3,1.5,0.7,2.3,1.1c1.3,0.6,1.6,1.5,1.1,2.5S28.5,16,27.2,15.5z"/>
                    <g>
                        <path className={style.st1} d="M25.5,24.9c-0.5,1.1-1.4,0.7-2.2,0.3c-4.4-2.4-9.1-2.4-13.9-1.4c-0.9,0.2-1.7,0.1-1.9-0.9
		c-0.2-1.1,0.7-1.4,1.5-1.5c1.9-0.3,3.9-0.5,5.8-0.8c3.4,0.1,6.6,0.9,9.6,2.4C25.2,23.4,26,23.9,25.5,24.9z"/>
                        <path className={style.st1} d="M27.7,20.2c-0.2,1-1.3,1.4-2.3,0.8c-4-2.2-8.3-2.9-12.8-2.6c-1.2,0.1-2.5,0.3-3.7,0.6c-1.1,0.2-1.9,0-2.2-1
		c-0.4-1.1,0.4-1.7,1.4-1.9c2.1-0.5,4.3-0.8,5.6-1c5.1,0.2,9.2,1,12.9,3.2C27.3,18.7,28,19.2,27.7,20.2z"/>
                        <path className={style.st1} d="M29.9,14.9c-0.5,1-1.4,1.1-2.7,0.6c-2.2-0.8-4.5-1.7-6.8-2.2c-4-0.9-8-0.8-12,0.2c-0.1,0-0.3,0.1-0.5,0.1
		c-1.2,0.3-2.1-0.2-2.3-1.2C5.3,11.3,6,10.5,7,10.3c1.8-0.4,3.7-0.7,5.5-1c0.8-0.1,1.7,0,2.2,0c4.4-0.1,8.2,0.6,11.8,2
		c0.8,0.3,1.5,0.7,2.3,1.1C30.1,13,30.4,13.9,29.9,14.9z"/>
                    </g>
                </svg>
            </a>
        </div>
    )
}

export default Spotify