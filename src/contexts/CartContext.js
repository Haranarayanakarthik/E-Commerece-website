import React from 'react';

const CartContext = () => {
  return <div>
    fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))
  </div>;
};

export default CartContext;
