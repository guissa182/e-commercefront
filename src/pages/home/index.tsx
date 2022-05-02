import React from "react";
import { Container } from "./style";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Products from "../../components/products";
import Footer from "../../components/footer"

const Home: React.FC = () => {
  return (
      <Container>
        <Header />
        <Banner />
        <Products/>
        <Footer />
      </Container>
  );
};

export default Home;
