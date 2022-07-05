import React from "react";

export const List = ({ list }) => {
  const { strMeal, strMealThumb } = list;
  return (
    <div className="card">
      <img className="card-img-top" src={strMealThumb} alt={strMeal} />
      <div className="card-body">
        <h5 className="card-title">{strMeal}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="javascript:;" className="btn btn-primary">
          Add To Cart
        </a>
      </div>
    </div>
  );
};
