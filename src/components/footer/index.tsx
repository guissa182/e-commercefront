import React from "react";
import { Container, Logo } from "./style";
import { Button } from "@mui/material";
import logo from '../../assets/Logo.png'



const Footer: React.FC = () => {
  return (
      <Container>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <ul>
          <li><Button>About</Button></li>
          <li><Button>Help</Button></li>
          <li><Button>Legal</Button></li>
        </ul>
      </Container>
  );
};

export default Footer;
