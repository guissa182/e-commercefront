/* Controla as rotas em que cada compenente será renderizado */
import React from "react";
import { Container } from "./style";
import Header from "../../components/header";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default Home;
