import React, { useState, useEffect } from 'react';
import style from './Music.module.css';
import play from '../Media/Icon/play.svg';
import {i18n} from '../../lib/i18n/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Before from '../BeforeAfter/Before';

const getSize = () => window.innerWidth < 1024 ? 2 : 3;

const Music = (props) => {
    const [w, setW] = useState(getSize());

    useEffect(() => {
        const resizeHandler = e => setW(getSize());

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [setW]);

    const musicList = props.music.map(el => (
        <SwiperSlide key={el.title}>
            <div className={style.slide}>
                <div className={style.trackImgWrap}>
                    <img className={style.trackImg} src={el.img} alt={el.title}/>
                    <div className={style.playHover}>
                        <a href={el.href} target='_blank' rel='noopener noreferrer'>
                            <img className={style.playButton} src={play} alt='Play'/>
                        </a>
                    </div>
                </div>
                <p className={style.title}>{el.title}</p>
                <h5 className={style.genre}>{el.genre}</h5>
            </div>
        </SwiperSlide>
    ))

    return (
        <div id='Music'>
            <Before/>
            <div className={style.music}>
                <div className={style.musicWrapper}>
                    <h1 className={style.header}><span className={style.title}>{i18n.text('title')}</span>{i18n.text('music/title')}</h1>
                </div>
                <Swiper
                    spaceBetween={150}
                    slidesPerView={w}
                    loop>
                    {musicList}
                </Swiper>
            </div>
            {/*<After/>*/}
        </div>
    )
}
export default Music
