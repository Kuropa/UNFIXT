import React from "react";
import style from './Scroll.module.css';
import scroll from '../../Media/Icon/mouse.svg'

const Scroll = () => {
    return (
        <div>
            <div className={style.wrapper}>
                <p className={style.skills}>skills</p>
                <img className={style.mouse} alt='.' src={scroll}/>
            </div>
        </div>
    )
}

export default Scroll