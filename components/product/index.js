import React from 'react';

const index = ({imgUrl, name, price}) => {
  return(
    <div className="product">
      <img src={imgUrl} alt={name} className="product-image" />
      <p className="name">{name}</p>
      <p className="price">₹ {price}</p>
    </div>
  )
}

export default index;