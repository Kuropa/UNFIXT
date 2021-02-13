import React from 'react';
import styles from './Home.module.css';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div className={styles.container}>
            <Offer/>
        </div>
    )
}

export default Home
