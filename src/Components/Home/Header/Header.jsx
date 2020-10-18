import React, { useCallback } from 'react';
import Logo from '../../Media/Icon/logo.svg';
import style from './Header.module.css'
import {i18n} from "../../../lib/i18n/i18n";

const Header = () => {
    const currentLang = localStorage.getItem('lang') || 'EN';

    const handleSelectChange = useCallback((e) => {
        localStorage.setItem('lang', e.currentTarget.value);
        window.location.reload()
    }, []);

    return (
        <div className={style.header}>
            <img alt='logo' className={style.logo} src={Logo}/>
            <nav>
                <a className={style.navLink} href="#About">{i18n.text("menu/about")}</a>
                <a className={style.navLink} href="#Music">{i18n.text("menu/music")}</a>
                <a className={style.navLink} href="#Contacts">{i18n.text("menu/contacts")}</a>
                <select onChange={handleSelectChange}>
                    <option value='EN' selected={currentLang === 'EN'}>EN</option>
                    <option value='RU' selected={currentLang === 'RU'}>RU</option>
                </select>
            </nav>
        </div>
    )
}

export default Header