import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 30px;
  background-color: #DC8A9A;
  height: 65px;
`
export const Logo = styled.h1`
  display: flex;
  align-items: center;
  img{
    width: 80px;
    height: 80px;
  }
`
export const Menu = styled.div`
  float: right;
  display: flex;
  @media (max-width: 968px) {
    display: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin: 0px 5px;
    font-size: 25px;
    font-family: Muli, Arial, Helvetica, sans-serif !important;
    height: 100%;
  }
  a {
      height: 100%;
      text-decoration: none;
      color: #5F2F79;
      margin: 0 5px 0 0;
      &:hover {
        color: #000;
      
      } 
    }

`
export const MenuMobile = styled.div`
  display: none;
  @media(max-width: 968px){
    display: block; 
  }
`
export const ContentMenuMobile = styled.div`
  background-color: #fff;
  position: absolute;
  right: 30px;
  box-shadow: 0 0 0.5em #000000;
  z-index: +10;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;
    overflow: show;
    color: #000000;
    padding: 0 50px 0 10px;
    font-size: 17px;
    & li:hover{
      border-bottom: 2px solid #000;
      cursor: pointer;
    }
  }
`