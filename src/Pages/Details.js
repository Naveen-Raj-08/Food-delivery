import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { Header } from "../Components/Header";

export const Details = () => {
  const location = useLocation();

  const handleAddToCart = () => {};

  const { strMeal, strMealThumb } = location.state;
  return (
    <div>
      <title>Product Listing</title>

      <Container tag="div" fluid={true} className="custom__container">
        <Row tag="div" className="page__header">
          <Header />
        </Row>

        <div className="details__wrapper d-flex justify-content-start align-items-start ">
          <div className="media__wrapper mx-2">
            <img className="image" src={strMealThumb} alt={strMeal} />
          </div>
          <div className="content__details mx-2">
            <h3 className="content__title">{strMeal}</h3>
            <p></p>

            <button
              type="button"
              name="add to cart"
              className="btn btn-primary"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
