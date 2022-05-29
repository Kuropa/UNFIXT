import React from "react";
import style from './Button.module.css';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.handleClick} className={style.button}>{props.text}</button>
        </div>
    )
}

export default Button