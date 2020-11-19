import React from "react";
import style from './Bullet.module.css';

const Bullet = (props) => {
    console.log(props.classes)
    return (
        <div data-aos={props.aos} data-aos-offset='300' className={style.container}>
            <div style={props.revers} className={style.bullet}>
                <img className={style.graphic} src={props.src} alt='img'/>
                <div className={`${style.textWrapper} ${props.classes}}`}
                    // style={props.style}
                >
                    <h1 className={style.header}>{props.header}</h1>
                    <h4 className={style.bild}>{props.bild}</h4>
                    <p className={style.description}>{props.description}</p>
                    <div className={style.price}>
                        <p>{props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bullet