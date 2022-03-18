import React, { Component } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CurrencyService from "../../services/CurrencyService";

import {Container,Subtitle, Box, Body, Title } from "./styles";

class ViewCurrency extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            currency: {},
        }

    }

    componentDidMount() {
        CurrencyService.getCurrencyById(this.state.id).then(res => {
            this.setState({currency: res.data});
        })
    }

    render() {
        return(
            <Container>
                <Navbar />
                <Body>
                    <div className="container"><br/>
                    <Title className="text-center text-light">Detalhes da Moeda</Title>

                        <Subtitle>Nome</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.currency.name}</div>    
                        </Box><br/>

                        <Subtitle>Descrição</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.currency.description}</div>
                        </Box><br/>

                        <Subtitle>Criada em:</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.currency.createdAt}</div>
                        </Box><br/>

                        <Subtitle>Última atualização:</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.currency.createdAt}</div>
                        </Box><br/>

                        <Subtitle>Status:</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.currency.active ? "Ativa" : "Inativa"}</div>
                        </Box><br/>

                        </div>
                    </Body>

                <Footer />
            </Container>
        );
    };
}

export default ViewCurrency;
