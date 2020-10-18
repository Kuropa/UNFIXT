import React from "react";
import style from './Bullet.module.css';

const Bullet = (props) => {
    return (
        <div data-aos={props.aos} data-aos-offset='300' className={style.bullet} style={props.revers}>
            <img className={style.graphic} src={props.src} alt='img'/>
            <div className={style.textWrapper} style={props.style}>
                <h1 className={style.header}>{props.header}</h1>
                <h4 className={style.bild}>{props.bild}</h4>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}

export default Bullet