import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 500px;
  background-color: #000;
  & img{
    width: 100%;   
  }
  @media (max-width:968px){
    height: fit-content;
  }
`