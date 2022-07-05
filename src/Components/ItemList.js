import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { List } from "./List";
import { Container, Row } from "reactstrap";
import { Header } from "./Header";

export const ItemList = () => {
  const [ListItems, setListItems] = useState();

  const location = useLocation();
  const CategoryEndpoint =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

  useEffect(() => {
    const fetchCategoryItems = async () => {
      await axios
        .get(`${CategoryEndpoint}${location.state}`)
        .then((res) => {
          setListItems(res.data.meals);
        })
        .catch((err) => console.error(err));
    };

    fetchCategoryItems();
  }, []);

  return (
    <>
      <title>Category {location.state}</title>

      <Container tag="div" fluid={true} className="home__page">
        <Row tag="div" className="page__header">
          <Header />
        </Row>
      </Container>

      <h1 className="page__title">Category {location.state}</h1>
      <div className="row list__items">
        {ListItems === undefined || ListItems === null ? (
          <span className="spinner spinner-border"></span>
        ) : (
          ListItems.map((list) => {
            return (
              <div className="col-md-3">
                <List key={list.idMeal} list={list} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
