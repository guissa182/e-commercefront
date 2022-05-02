import React from "react";
import { Container, Form } from "./style";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';

const FormLogin: React.FC = () => {
  return (
    <Container>
      <Form
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <Typography variant="h4">Título</Typography>
        <TextField id="email" label="Email" variant="outlined" />
        <TextField id="password" label="Senha" variant="outlined" />
        <Button variant="outlined">Logar</Button>    
      </Form>
    </Container>
  );
};

export default FormLogin;
