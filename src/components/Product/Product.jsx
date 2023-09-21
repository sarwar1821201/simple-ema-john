import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            {/* <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button> */}
        </div>
    );
};

export default Product;