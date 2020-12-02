import React from 'react';
import style from './Contacts.module.css';
import Socials from './Socials/Socials';
import Form from './Form/Form';
import Before from '../BeforeAfter/Before';

const Contacts = (props) => {
    return (
        <div id='Contacts'>
            <Before/>
            <div className={style.contacts}>
                <div className={style.contactsWrapper}>
                    {/*<h1 className={style.header}>{i18n.text('contacts/title')}</h1>*/}
                </div>
                <div className={style.wrapper}>
                    <Socials socials={props.socials}/>
                    <Form/>
                    <div className={style.emailWrap}>
                        <h2 className={style.email}>unfixtmusic@gmail.com</h2>
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
