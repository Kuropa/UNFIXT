import React, { useState } from "react";
import style from './Music.module.css';
import play from '../Media/Icon/play.svg';
import {i18n} from "../../lib/i18n/i18n";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Before from "../BeforeAfter/Before";
import After from "../BeforeAfter/After";

const Music = (props) => {
    let [w, setW] = useState(window.innerWidth < 1024? 2 : 3);

    window.onresize = (e) => {
        e.target.innerWidth < 1024 ? w=2 : setW(w=3)
    };

    let musicList = props.music.map(el => (
        <SwiperSlide key={el.title}>
            <div className={style.slide}>
                <div className={style.trackImgWrap}>
                    <img className={style.trackImg} src={el.img} alt={el.title}/>
                    <div className={style.playHover}>
                        <a href={el.href} target='_blank' rel="noopener noreferrer">
                            <img className={style.playButton} src={play} alt="Play"/>
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
                    <h1 className={style.header}>{i18n.text("music/title")}</h1>
                </div>
                <Swiper
                    spaceBetween={150}
                    slidesPerView={w}
                    loop={true}
                >
                    {musicList}
                </Swiper>
            </div>
            <After/>
        </div>
    )
}
export default Music