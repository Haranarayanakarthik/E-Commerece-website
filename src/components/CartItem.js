import React, { useState } from "react";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts");
      const data = await response.json();
      setCartItems(data);
      setShowCart(true);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={fetchCartItems}
      >
        My Cart
      </button>

      {showCart && (
        <div className="mt-4 p-4 border rounded shadow-md bg-gray-100">
          <h2 className="text-lg font-bold mb-2">Cart Items</h2>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((cart, index) => (
                <li key={index} className="p-2 border-b">
                  Cart ID: {cart.id}, User ID: {cart.userId}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCart;
