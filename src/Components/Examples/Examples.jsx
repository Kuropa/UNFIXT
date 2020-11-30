import React from "react"
import style from './Examples.module.css';
import PlayList from "./PlayList/PlayList";
import {i18n} from "../../lib/i18n/i18n";

const Examples = (props) => {
    return(
        <div className={style.container}>
            <h1>{i18n.text("examples/title")}</h1>
            <PlayList examples={props.examples}/>
        </div>
    )
}
export default Examples