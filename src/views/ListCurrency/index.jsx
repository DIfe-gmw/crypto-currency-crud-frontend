import React, { Component, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import CurrencyService from "../../services/CurrencyService";
import { TableHTML, Button, Container, Body, Title, Subtitle, ReactRouterImage } from "./styles";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

class ListCurrency extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currencies: [],
            searchTerm: ''
        }
        this.updateCurrency = this.updateCurrency.bind(this);
        this.deleteCurrency = this.deleteCurrency.bind(this);
    }

    componentDidMount() {
        CurrencyService.getCurrencies().then((res) => {
            this.setState({currencies: res.data})
        })
    }

    updateCurrency(id) {
        this.props.history.push('/register-currency/' + id)
    }

    viewCurrency(id) {
        this.props.history.push('/view-currency/' + id)
    }

    deleteCurrency(id) {
        CurrencyService.deleteCurrency(id).then(res => {
            this.setState({currencies: this.state.currencies.filter(currency => currency.id !== id)});
        })
    }

    searchBar() {
        this.state.currencies.filter((val) => {
            if(this.state.searchTerm == val) {
                this.setState({searchTerm: val});
            }
            else if(val.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                this.setState({searchTerm: val});
            }
        })
    }

    render() {
        return(
        <Container>
            <Navbar />
            <Title>Lista de Moedas</Title>
            <Body>
                { this.state.currencies.length > 0
                ? <SearchBar placeholder="Pesquisar" data={this.state.currencies}/>
                : <div></div>
                }
                <div className="container">
                {
                this.state.currencies.length > 0
                ?    <TableHTML className="table table table-striped table-bordered table-dark table-hover mx-auto">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Cotação (R$)</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                            
                        <tbody>
                            {
                                this.state.currencies.map(
                                    currency => 
                                    <tr key={currency.id} >
                                        <td>{currency.id}</td>
                                        <td>{currency.name}</td>
                                        <td>{currency.value}</td>
                                        <td>
                                            <Button onClick={() => this.updateCurrency(currency.id)} className="btn btn-lg btn-info ml-4">E</Button>
                                            <Button onClick={() => this.deleteCurrency(currency.id)} className="btn btn-lg btn-danger ml-4">X</Button>
                                            <Button onClick={() => this.viewCurrency(currency.id)} className="btn btn-lg btn-primary btn-info ml-4 mr-4">D</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </TableHTML>
                : 
                    <div>
                        <div className="container">
                            <br/><br/>
                            <Subtitle>Nenhuma moeda encontrada.</Subtitle>
                        </div>
                    </div>
                }
                </div>
            </Body>
            <Footer />
        </Container>
        );
    };
}

export default ListCurrency;
