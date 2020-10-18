import React from "react";
import style from './Reviews.module.css';
import quote from '../Media/Icon/quote.svg';
import {i18n} from "../../lib/i18n/i18n";

const Reviews = (props) => {
    let reviewList = props.reviewers.map(reviewer => (
        <div className={style.reviewerWrap}>
            <p className={style.reviewerReview}>{reviewer.review}</p>
            <div className={style.reviewerInfo}>
                <div className={style.reviewerImg} style={{backgroundImage: `url(${reviewer.img})`}}></div>
                <p className={style.reviewerName}>{reviewer.reviewer}</p>
            </div>
        </div>
    ))

    return (
        <div>
            <div className={style.reviews}>
                <div className={style.headerWrap}>
                    <h1>{i18n.text("reviews/title")}</h1>
                    <img data-aos="fade-right" data-aos-offset='300' src={quote} className={style.quote}/>
                </div>
                    {reviewList}
            </div>
        </div>
    )
}

export default Reviews