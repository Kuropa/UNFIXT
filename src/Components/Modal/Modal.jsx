import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ show, setShow,videoSettings, src }) => {
    return show && (
        <div onClick={() => setShow(false)}>
            <div className={styles.modalOverlay}>
                <div className={styles.modalWrapper}>
                    <div className={styles.modalButtonWrapper}>
                        <div className={styles.modalButton}></div>
                    </div>
                    <div className={styles.modalContent}>
                        <iframe {...videoSettings}
                                className={styles.video}
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