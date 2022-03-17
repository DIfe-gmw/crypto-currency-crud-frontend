import React from "react";

import { Container, Title, Subtitle } from "./styles";

function Footer() {
  console.log(localStorage?.getItem("access") === "999");

  return (
    <Container className="footer">
      <Title>Projeto CRUD de Cripto Moedas</Title>
      <Subtitle>
        Feito com React.JS e Spring Boot
      </Subtitle>
    </Container>
  );
}

export default Footer;
