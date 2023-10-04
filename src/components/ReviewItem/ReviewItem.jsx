import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {

      const{name, id, img,price,quantity}= props.product;

    return (
        <div className='review-item'>
           
          <img src={img} alt="" />


        </div>
    );
};

export default ReviewItem;