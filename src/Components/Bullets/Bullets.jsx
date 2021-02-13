import React from 'react';
import styles from './Bullets.module.css';
import Bullet from './Bullet/Bullet';
import soundProd from '../Media/Landing-img/SoundProd.svg';
import arrangement from '../Media/Landing-img/Arrangiment.svg';
import mastering from '../Media/Landing-img/mastering.svg';
import mixing from '../Media/Landing-img/mixing.svg';
import {i18n} from '../../lib/i18n/i18n';

const Bullets = () => {
    return (
        <div id='prices' className={styles.bullets}>
            <Bullet
                aos='fade-left'
                postion='left'
                src={soundProd}
                header={i18n.text('bullet/1/title')}
                build={i18n.text('bullet/1/title_s')}
                description={i18n.text('bullet/1/description')}
                from={i18n.text("prices/from")}
                price={i18n.text("prices/4/price")}
                currency={i18n.text("prices/currency")}
            />
            <Bullet
                aos='fade-right'
                postion='right'
                src={arrangement}
                header={i18n.text('bullet/2/title')}
                build={i18n.text('bullet/2/title_s')}
                description={i18n.text('bullet/2/description')}
                from={i18n.text("prices/from")}
                price={i18n.text("prices/3/price")}
                currency={i18n.text("prices/currency")}
            />
            <Bullet
                aos='fade-left'
                postion='left'
                src={mastering}
                header={i18n.text('bullet/3/title')}
                build={i18n.text('bullet/3/title_s')}
                description={i18n.text('bullet/3/description')}
                from={i18n.text("prices/from")}
                price={i18n.text("prices/2/price")}
                currency={i18n.text("prices/currency")}
            />
            <Bullet
                aos='fade-right'
                postion='right'
                src={mixing}
                header={i18n.text('bullet/4/title')}
                build={i18n.text('bullet/4/title_s')}
                description={i18n.text('bullet/4/description')}
                from={i18n.text("prices/from")}
                price={i18n.text("prices/1/price")}
                currency={i18n.text("prices/currency")}
            />
        </div>
    )
}

export default Bullets
