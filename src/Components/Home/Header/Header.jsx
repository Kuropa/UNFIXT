import React, { useCallback } from 'react';
import Logo from '../../Media/Icon/logo.svg';
import styles from './Header.module.css';
import { Link } from 'react-scroll';
import { i18n } from '../../../lib/i18n/i18n';
import vk from '../../Media/Icon/vk2.svg';
import telegram from '../../Media/Icon/telega.svg';
import WhatsApp from '../../Media/Icon/watsapp.svg';

const Header = () => {
    const currentLang = localStorage.getItem('lang') || 'EN';

    const handleSelectChange = useCallback((e) => {
        localStorage.setItem('lang', e.currentTarget.value);
        window.location.reload()
    }, []);

    return (
        <div id="menu" className={styles.header}>
            <div className={styles.contactsIcon}>
                <a href="http://unfixt.ru/">
                    <img alt='unfixt-logo' className={styles.logo} src={Logo} />
                </a>
                <a href='https://vk.com/eternally_ice' target='_blank' rel='noopener noreferrer'>
                    <img className={styles.icon} src={vk} alt='Vkontakte' />
                </a>
                <a href='https://tlgg.ru/@DDsch' target='_blank' rel='noopener noreferrer'>
                    <img className={styles.icon} src={telegram} alt='Telegram' />
                </a>
                <a href='https://wa.me/79264723221' target='_blank' rel='noopener noreferrer'>
                    <img className={styles.icon} src={WhatsApp} alt='WhatsApp' />
                </a>
            </div>
            <nav itemScope itemType="http://schema.org/SiteNavigationElement">
                <Link activeClass="active"
                      to="prices"
                      className={styles.navLink}
                      itemProp="url"
                      spy={true}
                      smooth={true}
                      hashSpy={false}
                      offset={-100}
                      duration={500}
                      delay={0}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >{i18n.text('menu/prices')}
                </Link>
                <Link activeClass="active"
                      to="music"
                      className={styles.navLink}
                      spy={true}
                      smooth={true}
                      itemProp="url"
                      hashSpy={false}
                      offset={-100}
                      duration={500}
                      delay={0}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >{i18n.text('menu/music')}
                </Link>
                <Link activeClass="active"
                      to="contacts"
                      className={styles.navLink}
                      spy={true}
                      smooth={true}
                      itemProp="url"
                      hashSpy={false}
                      offset={-100}
                      duration={500}
                      delay={0}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >{i18n.text('menu/contacts')}
                </Link>
                <select onChange={handleSelectChange}>
                    <option value='EN' selected={currentLang === 'EN'}>EN</option>
                    <option value='RU' selected={currentLang === 'RU'}>RU</option>
                </select>
            </nav>
        </div>
    )
}

export default Header
