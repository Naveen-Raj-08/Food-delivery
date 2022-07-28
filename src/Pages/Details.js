import React from "react";
import { Container, Row } from "reactstrap";
import { Header } from "../Components/Header";

export const Details = () => {
  return (
    <div>
      <title>Product Listing</title>

      <Container tag="div" fluid={true} className="custom__container">
        <Row tag="div" className="page__header">
          <Header />
        </Row>

        <div className="details__wrapper">
          <h1>Hello</h1>
        </div>
      </Container>
    </div>
  );
};
