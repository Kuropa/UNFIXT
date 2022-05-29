import React from 'react';
import styles from './Music.module.css';
import play from '../Media/Icon/play.svg';
import {i18n} from '../../lib/i18n/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Music = (props) => {
    const musicList = props.music.map(el => (
        <SwiperSlide key={el.title}>
            <div className={styles.slide}>
                <div className={styles.trackImgWrap}>
                    <img className={styles.trackImg} src={el.img} alt={el.title}/>
                    <div className={styles.playHover}>
                        <a href={el.href} target='_blank' rel='noopener noreferrer'>
                            <img className={styles.playButton} src={play} alt='Play'/>
                        </a>
                    </div>
                </div>
                <p className={styles.title}>{el.title}</p>
                <p className={styles.genre}>{el.genre}</p>
            </div>
        </SwiperSlide>
    ))

    return (
        <div id='music'>
            <div className={styles.music}>
                <div className={styles.musicWrapper}>
                    <p className={styles.header}><span className={styles.title}>{i18n.text('title')}</span>{i18n.text('music/title')}</p>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.5}
                    breakpoints={{
                        768: {
                            slidesPerView: 1.5,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 20
                        },
                        1919: {
                            slidesPerView: 2.5,
                            spaceBetween: 20
                        },
                    }}
                    loop>
                    {musicList}
                </Swiper>
            </div>
        </div>
    )
}
export default Music
