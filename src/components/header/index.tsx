/* Controla as rotas em que cada compenente será renderizado */
import React from "react";
import { Container } from "./style";
import { Button } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Home</li>
        <li>Teste</li>
      </ul>
      <Button variant="contained">Contained</Button>
    </Container>
  );
};

export default Header;
