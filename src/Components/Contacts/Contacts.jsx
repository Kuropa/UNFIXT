import React from 'react';
import styles from './Contacts.module.css';
import Socials from './Socials/Socials';
import Form from './Form/Form';

const Contacts = (props) => {
    let year = new Date().getFullYear()
    return (
        <div id='contacts'>
            <div className={styles.contacts}>
                <div className={styles.wrapper}>
                    <Socials socials={props.socials}/>
                    <Form/>
                    <div className={styles.emailWrap}>
                        <p className={styles.email}>unfixtmusic@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={styles.copyright}>Copyright Unfixt</p>
                <p className={styles.copyright}>2020-{year}</p>
            </div>
        </div>
    )
}
export default Contacts
