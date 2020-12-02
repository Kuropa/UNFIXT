import React, { useCallback } from 'react';
import Logo from '../../Media/Icon/logo.svg';
import style from './Header.module.css'
import {i18n} from '../../../lib/i18n/i18n';
import vk from '../../Media/Icon/vk2.svg';
import telega from '../../Media/Icon/telega.svg';
import wapp from '../../Media/Icon/watsapp.svg';

const Header = () => {
    // const currentLang = localStorage.getItem('lang') || 'EN';
    //
    // const handleSelectChange = useCallback((e) => {
    //     localStorage.setItem('lang', e.currentTarget.value);
    //     window.location.reload()
    // }, []);

    return (
        <div className={style.header}>
            <div className={style.contactsIcon}>
            <img alt='logo' className={style.logo} src={Logo}/>
                <a href='https://vk.com/eternally_ice' target='_blank' rel='noopener noreferrer'>
                    <img className={style.icon} src={vk} alt='Vkontakte'/>
                </a>
                <a href='https://tlgg.ru/@DDsch' target='_blank' rel='noopener noreferrer'>
                    <img className={style.icon} src={telega} alt='Telegram'/>
                </a>
                <a href='https://wa.me/79264723221' target='_blank' rel='noopener noreferrer'>
                    <img className={style.icon} src={wapp} alt='WhatsApp'/>
                </a>
            </div>
            <nav>
                <a className={style.navLink} href='#About'>{i18n.text('menu/about')}</a>
                <a className={style.navLink} href='#Music'>{i18n.text('menu/music')}</a>
                <a className={style.navLink} href='#Contacts'>{i18n.text('menu/contacts')}</a>
                {/*<select onChange={handleSelectChange}>*/}
                {/*    <option value='EN' selected={currentLang === 'EN'}>EN</option>*/}
                {/*    <option value='RU' selected={currentLang === 'RU'}>RU</option>*/}
                {/*</select>*/}
            </nav>
        </div>
    )
}

export default Header
