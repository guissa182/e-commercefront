import styled from "styled-components"
import { Typography } from "@mui/material";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 35px;
  justify-content: center;

`
export const Title = styled(Typography)`

`
export const SubTitle = styled(Typography)`
    
`
export const ContainerSlide = styled.div`
  width: 80;
  display: flex;
  justify-content: flex-start;
  margin: 10px 10px;
  flex-direction: column;
  box-shadow: 0 0 0.6em #A79E9C;
  img{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const ContainerInfo = styled.div`
  //display: flex;
  //flex-direction: column;
  text-align: left;
  margin: 10px auto;
  
  
`
