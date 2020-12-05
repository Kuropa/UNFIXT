import React from 'react';
import style from './Contacts.module.css';
import Socials from './Socials/Socials';
import Form from './Form/Form';

const Contacts = (props) => {
    return (
        <div id='Contacts'>
            <div className={style.contacts}>
                <div className={style.wrapper}>
                    <Socials socials={props.socials}/>
                    <Form/>
                    <div className={style.emailWrap}>
                        <p className={style.email}>unfixtmusic@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={style.copyright}>Copyright Unfixt</p>
                <p className={style.copyright}>2020</p>
            </div>
        </div>
    )
}
export default Contacts
