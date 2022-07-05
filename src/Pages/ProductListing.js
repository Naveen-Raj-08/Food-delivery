import axios from "axios";
import React, { useEffect, useState } from "react";
import { Category } from "../Components/Category";
import { Header } from "../Components/Header";
import { Container, Row } from "reactstrap";

export const ProductListing = () => {
  const [Categories, setCategories] = useState();

  const categories = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

  useEffect(() => {
    const fetchCategories = async () => {
      await axios
        .get(categories)
        .then((res) => {
          setCategories(res.data.meals);
        })
        .catch((err) => console.error(err));
    };

    fetchCategories();
  }, []);

  return (
    <>
      <title>Product Listing</title>

      <Container tag="div" fluid={true} className="home__page">
        <Row tag="div" className="page__header">
          <Header />
        </Row>
      </Container>

      <div className="category__list row mt-3 p-5">
        {Categories === undefined || Categories === null ? (
          <span className="spinner spinner-border"></span>
        ) : (
          Categories.map((category, index) => {
            return <Category key={index} categories={category} />;
          })
        )}
      </div>
    </>
  );
};
