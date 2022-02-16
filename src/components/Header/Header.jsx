import React from "react";
import logo from "../../images/logo.png";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={logo} alt="" />
      <nav className={classes.nav}>
        <ul className={classes.links}>
          <li className={classes.link}>
            <a href="/shop">Shop</a>
          </li>
          <li className={classes.link}>
            <a href="/order-review">Order Review</a>
          </li>
          <li className={classes.link}>
            <a href="/manage-inventory">Manage Inventory</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
