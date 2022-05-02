/* Controla as rotas em que cada compenente serÃ¡ renderizado */
import React, { useState } from "react";
import { Container, Logo, Menu, MenuMobile, ContentMenuMobile } from "./style";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/Logo.png'

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false) //estudar isso pelo amor de deus
  const handleOpenNavMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <Container>
      <Logo>
        <a href="./"><img src={logo} alt="" /></a>
      </Logo>
      <Menu> 
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="">Pordutos</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
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