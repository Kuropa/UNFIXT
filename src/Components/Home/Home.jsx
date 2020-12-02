import React from 'react';
import style from './Home.module.css';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div className={style.container}>
            <Offer/>
            {/*<Scroll/>*/}
        </div>
    )
}

export default Home
