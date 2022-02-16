import axios from "axios";
import React, { useEffect, useState } from "react";
import { addToCart, getItemFromLocalStorage } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import classes from "./Shop.module.scss";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  const handleCart = (product) => {
    setCart([...cart, product]);
    addToCart(product);
  };

  useEffect(() => {
    axios.get("./products.JSON").then((response) => {
      setProducts(response.data);
      setDisplayProducts(response.data);
    });
  }, []);

  //  set cart from localstorage.
  useEffect(() => {
    if (products.length) {
      const shopping_cart_ls = getItemFromLocalStorage("shopping_cart");
      if (shopping_cart_ls) {
        let cartItems = JSON.parse(shopping_cart_ls);
        let storedCartItems = [];
        for (const key in cartItems) {
          const product = products.find((product) => product.key === key);
          if (product) {
            Array(cartItems[key])
              .fill(0)
              .forEach((i) => storedCartItems.push(product)); // pushing product `quantity` times
          }
        }
        setCart(storedCartItems);
      }
    }
  }, [products]);

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(filteredProducts || []);
  };

  return (
    <>
      <div className={classes.searchContainer}>
        <input
          placeholder="Search Products"
          type="text"
          onChange={handleSearch}
        />
      </div>
      <div className={classes.shopContainer}>
        <div className={classes.productContainer}>
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleCart={handleCart}
            ></Product>
          ))}
        </div>
        <div className={classes.cartContainer}>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
