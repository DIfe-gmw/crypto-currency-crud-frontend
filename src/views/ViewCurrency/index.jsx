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
            this.setState({createdAt: this.state.currency.createdAt.replace("T"," ")});
            this.setState({updatedAt: this.state.currency.updatedAt.replace("T"," ")});
        })
    }

    render() {
        return(
            <Container>
                <Navbar />
                <Body>
                    <div className="container"><br/>
                    <Title className="text-center text-light">Detalhes da Moeda</Title>

                        <Subtitle>Nome e Cotação (R$)</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.currency.name}|R${this.state.currency.value}</div>    
                        </Box><br/>

                        <Subtitle>Descrição</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.currency.description}</div>
                        </Box><br/>

                        <Subtitle>Criada em:</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.createdAt}</div>
                        </Box><br/>

                        <Subtitle>Última atualização:</Subtitle>
                        <Box className="text-light bg-dark card col-md-6 offset-md-3">
                            <div className="card-body">{this.state.updatedAt}</div>
                        </Box><br/>

                        <Subtitle>Status:</Subtitle>
                        <Box className={
                            this.state.currency.active 
                            ? "text-light bg-success card col-md-6 offset-md-3"
                            : "text-light bg-dark card col-md-6 offset-md-3"
                        }>
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
