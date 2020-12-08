import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Modal from '../Modal/Modal'
import play from '../Media/Icon/play.svg'
import style from './ExampleVideo.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ExampleVideo = (props) => {
    const getSize = () => window.innerWidth <= 1023 ? 1 : 3;

    const [w, setW] = useState(getSize());
    const [show, setShow] = useState(false)
    const [link, setLink] = useState(null)

    SwiperCore.use([Navigation]);

    useEffect(() => {
        const resizeHandler = e => setW(getSize());

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [setW]);

    const handleClick = (e) => {
        setLink(e.target.id)
        setShow(true)
    }

    const videoSettings = {
        frameBorder: '0',
        autoPlay: true,
        allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    }

    return (
        <div>
            <Modal
                show={show}
                setShow={setShow}
                src={link}
                text={link}
                videoSettings={videoSettings}
            />
            <div className={style.exampleVideo}>
                <div>
                    <Swiper
                        spaceBetween={200}
                        slidesPerView={w}
                        loop
                        navigation={{
                            nextEl: '.next',
                        }}
                        >
                        {
                            props.examplesVideo.map(video => (
                                <SwiperSlide key={video.title}>
                                    <div className={style.videoWrapper}>
                                        <img className={style.videoImg} src={video.img} alt={video.title}/>
                                        <div className={style.playHover}>
                                            <img id={video.video}
                                                 onClick={handleClick}
                                                 className={style.playButton}
                                                 src={play}
                                                 alt='Play'/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <div className='next' />
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ExampleVideo