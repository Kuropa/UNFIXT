import React, { useState} from 'react'
import Modal from '../Modal/Modal'
import play from '../Media/Icon/play.svg'
import styles from './ExampleVideo.module.css'

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
            <div className={styles.exampleVideo}>
                {
                    props.examplesVideo.map(video => (
                        <div className={styles.exampleVideoCard} key={video.title}>
                            <div className={styles.videoWrapper}>
                                <img className={styles.videoImg} src={video.img} alt={video.title}/>
                                <div className={styles.playHover}>
                                    <img id={video.video}
                                         onClick={handleClick}
                                         className={styles.playButton}
                                         src={play}
                                         alt='Play'/>
                                </div>
                            </div>
                            <p className={styles.header}>{video.title}</p>
                            <p className={styles.subtitle}>{video.subtitle}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExampleVideo