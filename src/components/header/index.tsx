/* Controla as rotas em que cada compenente serÃ¡ renderizado */
import React, { useState } from "react";
import { Container, Logo, Menu, MenuMobile, ContentMenuMobile } from "./style";
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false) //estudar isso pelo amor de deus
  const handleOpenNavMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <Container>    
      <Logo>
        G
      </Logo>
      <Menu>
        <ul>
          <li><Button variant="contained">Home</Button></li>
          <li><Button variant="contained">Maggie</Button></li>
          <li><Button variant="contained">Bart</Button></li>
          <li><Button variant="contained">SpiderPig</Button></li>
        </ul>
      </Menu>
      <MenuMobile>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        {showMenu && (
          <ContentMenuMobile>
            <ul>
              <li>Home</li>
              <li>margie</li>
              <li>lizza</li>
              <li>bart</li>
            </ul>
          </ContentMenuMobile>
        )}    
      </MenuMobile>
    </Container>
  );
};

export default Header;