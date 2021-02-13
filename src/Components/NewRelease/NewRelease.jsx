import React from 'react';
import styles from './NewRelease.module.css';
import {i18n} from '../../lib/i18n/i18n';
import Spotify from './Icon/Spotify';
import YouTube from './Icon/YouTube';
import AppleMusic from './Icon/AppleMusic';

const NewRelease = (props) => {
    return (
        <div>
            {
                props.newRelease.map(el => (
                    <div className={styles.container} key={el.title}>
                        <div className={styles.newRelease}>
                            <p>
                                <img
                                    data-aos='fade'
                                    className={styles.cover}
                                    src={el.img}
                                    alt={el.title} />
                            </p>
                            <div
                                data-aos='fade'
                                className={styles.textWrapper}>
                                <p className={styles.title}>
                                    <span className={styles.blue}>
                                        { i18n.text('slider/title_b') }
                                    </span>{ i18n.text('slider/title') }
                                </p>
                                <p className={styles.description}>
                                    {el.title}
                                    <span className={styles.bold}>
                                    {i18n.text('slider/title_s_b')}
                                </span>{i18n.text('slider/title_s')}
                                </p>
                                <div className={styles.iconWrapper}>
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
