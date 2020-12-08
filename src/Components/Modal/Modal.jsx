import React from 'react'
import style from './Modal.module.css'

const Modal = ({ show, setShow,videoSettings, src }) => {
    return show && (
        <div onClick={() => setShow(false)}>
            <div className={style.modalOverlay}>
                <div className={style.modalWrapper}>
                    <div className={style.modalButtonWrapper}>
                        <div className={style.modalButton}></div>
                    </div>
                    <div className={style.modalContent}>
                        <iframe {...videoSettings}
                                className={style.video}
                                title='video'
                                src={src}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal