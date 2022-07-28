import React from "react";
import { useNavigate } from "react-router-dom";

export const List = ({ list }) => {
  const { strMeal, strMealThumb } = list;

  const navigate = useNavigate();
  return (
    <div className="card">
      <a href="/category/dish/view">
        <img className="card-img-top" src={strMealThumb} alt={strMeal} />
      </a>
      <div className="card-body">
        <h5
          className="card-title text-secondary text-decoration-none"
          onClick={() =>
            navigate(`/category/dish/view`, {
              state: list,
            })
          }
        >
          {strMeal}
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button type="button" name="add to cart" className="btn btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
