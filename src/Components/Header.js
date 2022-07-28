import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";
import Logo from "../assets/Media/Logo.png";
import { MiniCart } from "./MiniCart";

export const Header = () => {
  const [ShowMiniCart, setShowMiniCart] = useState(null);

  const location = window.location.pathname;

  useEffect(() => {
    if (ShowMiniCart) {
      document.body.classList.add("mini-cart-open");
    }
    return () => {
      if (ShowMiniCart) {
        document.body.classList.remove("mini-cart-open");
      }
    };
  }, [ShowMiniCart]);

  const showMiniCart = () => {
    setShowMiniCart(!ShowMiniCart);
  };

  return (
    <>
      <Col tag="div" md={3} className="logo align-items-center">
        <div className="logo__image">
          <Link to="/">
            <img src={Logo} alt="Site Logo" />
          </Link>
        </div>
      </Col>
      <Col tag="div" md={6} className="align-items-cente desktop__menu r">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className={
              location === "/categories" ? "active-location menu" : "menu"
            }
          >
            <Link to="/categories">Menu</Link>
          </div>
          <div className="menu">
            <Link to="/">How It works</Link>
          </div>
          <div
            className={location === "/about" ? "active-location menu" : "menu"}
          >
            <Link to="/about">About</Link>
          </div>
          <div className="menu">
            <Link to="/">FAQS</Link>
          </div>
          <div className="menu">
            <Link to="/">Contact</Link>
          </div>
        </div>
      </Col>
      <Col
        tag="div"
        md={3}
        className={
          ShowMiniCart === true
            ? "navigation__icons mini-cart-open d-flex justify-content-end  align-items-center"
            : "navigation__icons d-flex justify-content-end  align-items-center"
        }
      >
        <div className="icon">
          <IconButton aria-label="search">
            <FiSearch />
          </IconButton>
        </div>
        <div className="icon">
          <IconButton aria-label="mini-cart" onClick={showMiniCart}>
            <FiShoppingCart />
          </IconButton>
          <button className="minicart__overlay" onClick={showMiniCart}></button>
          <MiniCart CloseMiniCart={showMiniCart} />
        </div>
        <div className="icon">
          <IconButton aria-label="account">
            <FiUser />
          </IconButton>
        </div>
      </Col>
    </>
  );
};
