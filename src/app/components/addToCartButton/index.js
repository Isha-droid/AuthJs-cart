"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/slices/cart-slice";
function AddToCartButton({ product }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    // Check if the product is in the cart and update state
    setIsProductInCart(cart?.cartItems.some((item) => item.id === product.id));
  }, [cart, product.id]);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product?.id));
  }

  return (
    <div className="mt-8 max-w-md">
      <button
        type="button"
        onClick={isProductInCart ? handleRemoveFromCart : handleAddToCart}
      >
        {isProductInCart ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
}

export default AddToCartButton;
