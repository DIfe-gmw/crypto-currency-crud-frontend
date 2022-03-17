import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

import { Container, Body, Title, Subtitle, ReactRouterImage } from "./styles";


function Home() {
    return (
    <Container>
        <Navbar />

        <Body>
            <Title>Lista de Moedas</Title>
            <Table/>
        </Body>

        <Footer />
    </Container>
    );
}

export default Home;
