import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 87vh;
`
export const Produto = styled.h1`
  display: flex;
  flex-direction: column;
  border: solid 1px #000;
  border-radius: 20px;
  padding: 30px;
`
export const Frete = styled.div`
  display: flex;
  //border: solid 1px black;
  width: 650px;
  align-items: center;
  justify-content: left;
  
`
export const Itens = styled.div`
  //border: solid 1px black;
  img{
    height: 300px;
    width: 300px;
    border-radius: 20px;   
  }
`
export const Text = styled.h3`
`
export const SecondText = styled.h6`
`
export const Pedido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  //text-align: center;
`
export const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px;
  gap: 20px;
  
`