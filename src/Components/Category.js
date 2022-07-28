import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Category = ({ categories }) => {
  const [Photos, setPhotos] = useState();

  const navigate = useNavigate();

  const PEXELS_API_KEY =
    "563492ad6f91700001000001f551248a2ca1448f89db0c4721d9558f";

  const { strCategory } = categories;

  return (
    <div className="category col-md-3 mb-5">
      <button
        onClick={() =>
          navigate("/category", {
            state: strCategory,
          })
        }
        className="btn"
      >
        {strCategory}
      </button>
    </div>
  );
};
