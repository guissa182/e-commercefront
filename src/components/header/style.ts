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
  ul{
      display: flex;
      flex-direction: column;
      list-style: none;
    }
`