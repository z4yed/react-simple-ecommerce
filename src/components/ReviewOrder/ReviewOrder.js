import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import {
  addToCart,
  getItemFromLocalStorage,
  removeFromCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";
import classes from "./ReviewOrder.module.scss";

const ReviewOrder = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const [displayCart, setDisplayCart] = useState([]);

  useEffect(() => {
    let storedCart = getItemFromLocalStorage("shopping_cart");
    if (storedCart) {
      storedCart = JSON.parse(storedCart);
      const structuredCart = [];
      for (const key in storedCart) {
        const product = products.find((product) => product.key === key);
        if (product) {
          product["quantity"] = storedCart[key];
          structuredCart.push(product);
        }
      }
      setDisplayCart(structuredCart);
    }
  }, [cart]);

  const handleIncrease = (productId) => {
    const product = products.find((product) => product.key === productId);
    if (product) {
      product.quantity += 1;
      addToCart(product);
      setCart([...cart, product]);
    }
  };

  const handleDecrease = (productId) => {
    const product = products.find((product) => product.key === productId);
    if (product) {
      const productIndex = cart.indexOf(product);
      const cartProducts = cart; // we can't modify state variables. but we need to splice it.
      cartProducts.splice(productIndex, 1);
      removeFromCart(product);
      setCart([...cartProducts]);
    }
  };

  return (
    <div className={classes.reviewContainer}>
      <h2 className={classes.title}>Cart Items</h2>
      <div className={classes.body}>
        <div className={classes.productContainer}>
          {displayCart.map((product) => (
            <CartItem
              key={Math.random()}
              item={product}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            ></CartItem>
          ))}
        </div>
        <div className={classes.cartContainer}>
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
