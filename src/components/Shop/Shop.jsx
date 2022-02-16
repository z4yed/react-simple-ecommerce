import React from "react";
import classes from "./Shop.module.scss";

const Shop = () => {
  return (
    <div className={classes.shopContainer}>
      <div className={classes.productContainer}>
        <h2>Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum itaque
          optio quia voluptatem? Perferendis sint hic magni, perspiciatis
          reprehenderit repudiandae rerum earum culpa dolor impedit iure
          voluptatum tempora dolorum animi?
        </p>
      </div>
      <div className={classes.cartContainer}>
        <h2>Cart</h2>
      </div>
    </div>
  );
};

export default Shop;
