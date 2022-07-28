import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Header } from "../Components/Header";
import axios from "axios";

export const Homepage = () => {
  useEffect(() => {
    const APIENDPOINT = "www.themealdb.com/api/json/v1/1/";
  }, []);

  return (
    <div className="page-wrapper">
      <title>Home Page</title>

      {/* Page components starts from here*/}

      <Container tag="div" fluid={true} className="custom__container">
        <Row tag="div" className="page__header">
          <Header />
        </Row>
      </Container>
    </div>
  );
};
