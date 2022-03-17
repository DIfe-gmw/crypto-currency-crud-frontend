import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { Container, Body, Title, Subtitle, ReactRouterImage } from "./styles";

function Home() {
    return (
    <Container>
        <Navbar />

        <Body>
            <Title>Página Inicial</Title>
            <Subtitle>Sinta-se a vontade</Subtitle>
        </Body>

        <Footer />
    </Container>
    );
}

export default Home;
