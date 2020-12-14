import React, { useState} from 'react'
import Modal from '../Modal/Modal'
import play from '../Media/Icon/play.svg'
import style from './ExampleVideo.module.css'

const ExampleVideo = (props) => {
    const [show, setShow] = useState(false)
    const [link, setLink] = useState(null)

    const handleClick = (e) => {
        setLink(e.target.id)
        setShow(true)
    }

    return (
        <div>
            <Modal
                show={show}
                setShow={setShow}
                src={link}
                text={link}
            />
            <div className={style.exampleVideo}>
                {
                    props.examplesVideo.map(video => (
                        <div className={style.exampleVideoCard} key={video.title}>
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
                            <p className={style.header}>{video.title}</p>
                            <p className={style.subtitle}>{video.subtitle}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExampleVideo