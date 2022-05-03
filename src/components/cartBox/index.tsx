import React from "react";
import { Container, Botoes, Itens, Pedido, Produto, Text, SecondText } from "./style";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import anel from "../../assets/anel.jpg"


const CartBox: React.FC = () => {
  return (
    <Container>
      <Produto>
        <Text>Seu Carrinho</Text>
        <Itens>
          <SecondText>Anel de Noivado</SecondText>
          <img src={anel} alt="" />
          <SecondText> Quantidade: </SecondText>
          <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Itens>
      </Produto>
      <Pedido>
        <Text>Taxa de entrega: <br></br> <SecondText> Elegivel para Frete Gratis</SecondText> </Text>
        <Text>Resumo do Pedido:</Text>
        <SecondText> 1x Anel de Noivado </SecondText>  
        <Botoes>
          <Button variant="contained">Finalizar Pedido</Button>
          <Button variant="contained">Voltar as Compras</Button>
        </Botoes>
      </Pedido>
    </Container>
  );
};

export default CartBox;
