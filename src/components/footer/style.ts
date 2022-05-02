import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: solid 1px #A79E9C;
    background-color: #DC8A9A; 
    padding: 0 10px;
  ul{
    display: flex;
    float: right;
  }
  li{
    list-style: none;
  }
  
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  img{
    height: 50px;
    width: 50px;
  }
`