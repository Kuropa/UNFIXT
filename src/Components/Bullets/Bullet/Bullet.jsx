import React from "react";
import cn from 'classnames';
import style from './Bullet.module.css';

const Bullet = (props) => {
    const textWrapperClass = cn(style.textWrapper,
        props.postion === 'left' && style.left);

    return (
        <div data-aos={props.aos} data-aos-offset='300' className={style.container}>
            <div className={cn(style.bullet, props.postion === 'right' && style.reverse)}>
                <img className={style.graphic} src={props.src} alt='img'/>
                <div className={textWrapperClass}>
                    <h1 className={style.header}>{props.header}</h1>
                    <h4 className={style.build}>{props.build}</h4>
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
