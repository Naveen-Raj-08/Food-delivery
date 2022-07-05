import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";



const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com/",
  cache: new InMemoryCache(),
});


root.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
