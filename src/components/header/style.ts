import styled from "styled-components"

export const Container = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 30px;
  background-color: #382f2f9c;
`
export const Logo = styled.h1`
  background-color: #fff;
  color: black;
  height: 50px;
  width:  50px;
  display: flex;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const Menu = styled.div`
  float: right;
  display: flex;
  @media(max-width: 968px){
    display: none; 
  }
  ul{
    display: flex;
    list-style: none;
  }
  li{
    margin: 0px 5px;
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