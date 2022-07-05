import React from "react";
import { Row } from "reactstrap";
import { GrClose } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { IconButton } from "@mui/material";

export const MiniCart = ({ CloseMiniCart }) => {
  return (
    <div className="cart__wrapper">
      <Row tag="div" className="min__cart">
        <div className="cart__header d-flex justify-content-between align-items-center">
          <div className="heading">
            <IconButton aria-label="Close-mini-cart" onClick={CloseMiniCart}>
              <GrClose />
            </IconButton>
          </div>
          <p className="cart__total-items">
            <FiShoppingCart /> <span>24</span> Items
          </p>
        </div>

        <Row tag="div" className="cart__items"></Row>
      </Row>
    </div>
  );
};
