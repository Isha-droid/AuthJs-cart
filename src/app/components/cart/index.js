"use client";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { removeFromCart } from '../../../store/slices/cart-slice';
const Cart = () => {
  const { cart } = useSelector(state => state);
  const cartItems = cart.cartItems;
  const dispatch = useDispatch();

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const total = cartItems.reduce((acc, item) => acc + item.price, 0);
      setTotalAmount(total.toFixed(2));
    };

    calculateTotalAmount();
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          Your cart is empty. <Link href="/" className="text-blue-500">Go shopping!</Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cartItems.map(item => (
              <div key={item.id} className="border p-4 rounded-md shadow-md">
                <Image src={item.images[0]} alt={item.title} width={200} height={200} className="w-full h-auto mb-4" />
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
                <p className="text-gray-500">{item.category}</p>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <Link href={`/products/${item.id}`} className="text-blue-500 hover:underline">View Product</Link>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 border-t border-gray-200">
            <h2 className="text-2xl font-bold">Total Amount: ${totalAmount}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
