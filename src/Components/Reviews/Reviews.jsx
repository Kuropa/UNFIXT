import React from 'react';
import styles from './Reviews.module.css';
import quote from '../Media/Icon/quote.svg';

const Reviews = (props) => {
    let reviewList = props.reviewers.map(reviewer => (
        <div className={styles.reviewerWrap} key={reviewer.reviewer}>
            <p className={styles.reviewerReview}>{reviewer.review}</p>
            <div className={styles.reviewerInfo}>
                <div className={styles.reviewerImg} style={{backgroundImage: `url(${reviewer.img})`}}></div>
                <p className={styles.reviewerName}>{reviewer.reviewer}</p>
            </div>
        </div>
    ))

    return (
        <div>
            <div className={styles.reviews}>
                <div className={styles.headerWrap}>
                    <img alt='.' data-aos='fade-right' data-aos-offset='300' src={quote} className={styles.quote}/>
                </div>
                {reviewList}
            </div>
        </div>
    )
}

export default Reviews
