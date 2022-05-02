import React from "react";
import { Container } from "./style";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FormLogin from "../../components/forms/formLogin";


const Login: React.FC = () => {
  return (
      <Container>
        <Header />
        <FormLogin />
        <Footer />
      </Container>
  );
};

export default Login;
