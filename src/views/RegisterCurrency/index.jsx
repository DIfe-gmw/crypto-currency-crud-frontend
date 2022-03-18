import React, { Component } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CurrencyService from "../../services/CurrencyService";

import { Input, Button,  FormContainer, Container, Body, Title } from "./styles";


class RegisterCurrency extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            value: '',
            active: false
        }

        this.eventHandler = this.eventHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.saveOrUpdateCurrency = this.saveOrUpdateCurrency.bind(this);
    }

    componentDidMount() {
        if(this.state.id === "add") {
            return
        }
        else {
            CurrencyService.getCurrencyById(this.state.id).then( (res) => {
                let currency = res.data;
                this.setState(
                    {
                        name: currency.name,
                        description: currency.description,
                        value: currency.value,
                        active: currency.active
                    }
                );
            })
        }
    }

    eventHandler(event) {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    checkboxHandler = e => {
        this.setState({active: e.target.checked});
    }

    saveOrUpdateCurrency = (e) => {
        e.preventDefault();

        let currency = {name: this.state.name, description: this.state.description, value: this.state.value, active: this.state.active};
        console.log('currency => ' + JSON.stringify(currency));

        if(this.state.id === "add") {
            CurrencyService.createCurrency(currency);
            this.props.history.push('/list-currency');
        } 
        else {
            CurrencyService.updateCurrency(currency, this.state.id).then(res => {
                this.props.history.push('/list-currency')
            });
        }
    }

    getTitle() {
        if (this.state.id === "add") {
            return <Title className="text-center">Adicionar Moeda</Title>
        }
        else {
            return <Title className="text-center">Atualizar Moeda</Title>
        }
    }

    getButton() {
        if(this.state.id === "add") {
            return <Button className="btn btn-success" onClick={this.saveOrUpdateCurrency}>Inserir</Button>
        }
        else {
            return <Button className="btn btn-success" onClick={this.saveOrUpdateCurrency}>Editar</Button>
        }
    }

    render() {
        return(
            <Container>
                <Navbar />

                <Body>
                    {this.getTitle()}
                    <div className="container">
                <br/>
                    <FormContainer className="bg-dark card col-md-6 offset-md-3">
                        <div className="card-body form-outline ">
                            <form>
                            
                                <br/>

                                <div className="form-group">
                                    <label htmlFor="name" name="name" className="form-label sr-only">Nome</label>
                                    <Input onChange={this.eventHandler} value={this.state.name} maxLength="50"
                                    placeholder="Nome" id="name" name="name" className="form-control" required/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description" name="description" className="form-label sr-only">Descrição</label>
                                    <Input onChange={this.eventHandler} value={this.state.description} maxLength="204"
                                    placeholder="Descrição" className="form-control" name="description" id="description" required/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="value" name="value" className="form-label sr-only">Valor Monetário</label>
                                    <Input onChange={this.eventHandler} value={this.state.value}
                                    placeholder="Valor Monetário" className="form-control" name="value" id="value" required/>
                                </div>

                                <div className="custom-control custom-checkbox checkbox-lg">
                                    <Input onChange={this.checkboxHandler} checked={this.state.active}
                                    type="checkbox" className="custom-control-input" id="checkbox"/>
                                    <label htmlFor="checkbox" className="custom-control-label text-light">Ativar Moeda</label>
                                </div>

                                <br/>
                                {this.getButton()}
                            </form>
                        </div>
                    </FormContainer>
                    </div>
                </Body>

                <Footer />
            </Container>
        );
    };
}

export default RegisterCurrency;
