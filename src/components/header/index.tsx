/* Controla as rotas em que cada compenente será renderizado */
import React from "react";
import { Container } from "./style";
import { Button } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Container>
      <section className="header">
        <div className="puta">
           <h1>G</h1>
        </div>
          <div className="div">
            <Button variant="contained">Home</Button>
            <Button variant="contained">Maggie</Button>
            <Button variant="contained">Bart</Button>
            <Button variant="contained">SpiderPig</Button>
          </div>
      </section>
    </Container>
  );
};

export default Header;
