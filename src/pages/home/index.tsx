/* Controla as rotas em que cada compenente será renderizado */
import React from "react";
import { Container } from "./style";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Products from "../../components/products";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <Products/>
      </Container>
    </>
  );
};

export default Home;
