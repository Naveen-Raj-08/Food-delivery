import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Category = ({ categories }) => {
  const navigate = useNavigate();

  const { strCategory } = categories;
  return (
    <div className="category col-md-3 mb-5">
      <a
        href={"/category"}
        onClick={() =>
          navigate("/category", {
            state: strCategory,
          })
        }
      >
        {strCategory}
      </a>
    </div>
  );
};
