import React, { Component } from "react";
import CurrencyService from '../../services/CurrencyService'

import { Container, Button, TableHTML } from "./styles";

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currencies: []
        }
    }

    componentDidMount() {
        CurrencyService.getCurrencies().then((res) => {
            this.setState({currencies: res.data})
        })
    }

    render() {
        console.log(localStorage?.getItem("access") === "999");

        return (
            <Container className="container">
                <TableHTML className="table table table-striped table-bordered table-dark table-hover">
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
                                <tr key={currency.id} scope="row">
                                    <td>{currency.id}</td>
                                    <td>{currency.name}</td>
                                    <td>{currency.value}</td>
                                    <td>
                                        <Button className="btn btn-lg btn-info ml-4">E</Button>
                                        <Button className="btn btn-lg btn-danger ml-4">X</Button>
                                        <Button className="btn btn-lg btn-primary btn-info ml-4 mr-4">D</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </TableHTML>
            </Container>
        );
    }
}
export default Table;
