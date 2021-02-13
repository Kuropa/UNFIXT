import React from "react";
import cn from 'classnames';
import styles from './Bullet.module.css';

const Bullet = (props) => {
    const textWrapperClass = cn(styles.textWrapper,
        props.postion === 'left' && styles.left);

    return (
        <div data-aos={props.aos} data-aos-offset='300' className={styles.container}>
            <div className={cn(styles.bullet, props.postion === 'right' && styles.reverse)}>
                <img className={styles.graphic} src={props.src} alt='img'/>
                <div className={textWrapperClass}>
                    <h2 className={styles.header}>{props.header}</h2>
                    <p className={styles.build}>{props.build}</p>
                    <p className={styles.description}>{props.description}</p>
                    <div className={textWrapperClass}>
                        <p className={styles.price}>{props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bullet
