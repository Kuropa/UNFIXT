import React from 'react';
import style from './Home.module.css';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div className={style.container}>
            <Offer/>
        </div>
    )
}

export default Home
