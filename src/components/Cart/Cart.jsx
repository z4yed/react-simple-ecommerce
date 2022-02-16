import React from "react";
import classes from "./Cart.module.scss";

const Cart = (props) => {
  const { cart } = props;

  const cartPriceReducer = (prev, product) => prev + product.price;
  const total = cart.reduce(cartPriceReducer, 0);

  return (
    <div className={classes.cartContainer}>
      <h3 className={classes.title}>Order Summury</h3>
      <h4>Item Ordered: {cart.length || 0}</h4>
      <h4>Total Price: {total.toFixed(2)}</h4>

      <button className={classes.checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
