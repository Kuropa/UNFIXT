import React from "react";
import style from './Bullets.module.css';
import Bullet from "./Bullet/Bullet";
import soundProd from '../Media/Landing-img/SoundProd.svg';
import arrangement from '../Media/Landing-img/Arrangiment.svg';
import mastering from '../Media/Landing-img/mastering.svg';
import mixing from '../Media/Landing-img/mixing.svg';
import {i18n} from "../../lib/i18n/i18n";

const Bullets = () => {
    return (
        <div id='About'>
            <div className={style.bullets}>
                <Bullet
                    aos='fade-left'
                    classes={`${style.left}`}
                    style={{ textAlign: 'left' }}
                    src={soundProd}
                    header={i18n.text('bullet/1/title')}
                    bild={i18n.text('bullet/1/title_s')}
                    description={i18n.text('bullet/1/description')}
                />
                <Bullet
                    aos='fade-right'
                    classes={`${style.right}`}
                    style={{ textAlign: 'right' }}
                    revers={{textAlign: '-webkit-right',flexDirection: 'row-reverse'}}
                    src={arrangement}
                    header={i18n.text('bullet/2/title')}
                    bild={i18n.text('bullet/2/title_s')}
                    description={i18n.text('bullet/2/description')}
                />
                <Bullet
                    aos='fade-left'
                    style={{ textAlign: 'left' }}
                    src={mastering}
                    header={i18n.text('bullet/3/title')}
                    bild={i18n.text('bullet/3/title_s')}
                    description={i18n.text('bullet/3/description')}
                />
                <Bullet
                    aos='fade-right'
                    style={{ textAlign: 'right' }}
                    revers={{textAlign: '-webkit-right',flexDirection: 'row-reverse'}}
                    src={mixing}
                    header={i18n.text('bullet/4/title')}
                    bild={i18n.text('bullet/4/title_s')}
                    description={i18n.text('bullet/4/description')}
                />
            </div>
        </div>
    )
}

export default Bullets