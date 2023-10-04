import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = (props) => {

      const{name, id, img,price,quantity}= props.product;

    return (
        <div className='review-item'>
           
          <img src={img} alt="" />
          
          <div className='review-details'>
            <p className='product-title' >{name}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity} </p>
          </div>


          <button className='btn-delete'>
          <FontAwesomeIcon className='delete' icon={faTrashAlt} />
          </button>

        </div>
    );
};

export default ReviewItem;