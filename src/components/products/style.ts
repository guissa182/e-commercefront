import styled from "styled-components"
import { Typography } from "@mui/material";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 12px;
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
  margin: 0 10px;
  img{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
