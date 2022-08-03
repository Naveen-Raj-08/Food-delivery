import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";

export const List = ({ list }) => {
  const { strMeal, strMealThumb } = list;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("--------- Ready to dispatch an action ---------");
    dispatch(addToCart(list));
    console.log("--------- Item Added to Cart ---------");
  };

  return (
    <div className="card">
      <a
        href="/category/dish/view"
        onClick={() =>
          navigate(`/category/dish/view`, {
            state: list,
          })
        }
      >
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
  );
};
