import React from 'react';
import '../style/ProductReviewCard.css'

const ProductReviewCard=({image,index,price,review,name})=> {
  return( 
  <div className="productReviewCard">
      <img src={image} alt={`${index} review`}/>
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
  </div>
  )
}

export default ProductReviewCard;
