import React from 'react';
import style from './NewRelease.module.css';
import {i18n} from '../../lib/i18n/i18n';
import Spotify from './Icon/Spotify';
import YouTube from './Icon/YouTube';
import AppleMusic from './Icon/AppleMusic';

const NewRelease = (props) => {
    return (
        <div>
            {
                props.newRelease.map(el => (
                    <div className={style.container} key={el.title}>
                        <div className={style.newRelease}>
                            <p>
                                <img
                                    data-aos='fade'
                                    className={style.cover}
                                    src={el.img}
                                    alt={el.title} />
                            </p>
                            <div
                                data-aos='fade'
                                className={style.textWrapper}>
                                <h1 className={style.bold}>
                                    <span className={style.blue}>
                                        { i18n.text('slider/title_b') }
                                    </span>{ i18n.text('slider/title') }
                                </h1>
                                <p className={style.description}>
                                    {el.title}
                                    <span className={style.bold}>
                                    {i18n.text('slider/title_s_b')}
                                </span>{i18n.text('slider/title_s')}
                                </p>
                                <div className={style.iconWrapper}>
                                    <Spotify href={el.Spotify}/>
                                    <YouTube href={el.YouTube}/>
                                    <AppleMusic href={el.AppleMusic}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NewRelease
