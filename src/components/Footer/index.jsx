import React from "react";

import { Container, Title, Subtitle } from "./styles";
import { FaJava } from "react-icons/fa"

function Footer() {
  return (
    <Container className="footer">
      <Title>Projeto CRUD de Cripto Moedas</Title>
      <Subtitle>
        Feito com React.JS e Java Spring Boot
      </Subtitle>
    </Container>
  );
}

export default Footer;
