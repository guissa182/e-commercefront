import React from "react";
import { Container } from "./style";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CartBox from "../../components/cartBox";

const Cart: React.FC = () => {
  return (
      <Container>
        <Header />
         <CartBox />
        <Footer />
      </Container>
  );
};

export default Cart;
