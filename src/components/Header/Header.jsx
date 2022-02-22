import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={logo} alt="" />
      <nav className={classes.nav}>
        <ul className={classes.links}>
          <li className={classes.link}>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className={classes.link}>
            <NavLink to="/review-order">Order Review</NavLink>
          </li>
          <li className={classes.link}>
            <NavLink to="/manage-inventory">Manage Inventory</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
