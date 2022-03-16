import React, { Component } from 'react'
import CurrencyService from '../services/CurrencyService'

class ListCurrencyComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currencies: []
        }

        this.addCurrency = this.addCurrency.bind(this);
        this.updateCurrency = this.updateCurrency.bind(this);
        this.deleteCurrency = this.deleteCurrency.bind(this);
    
    }

    componentDidMount() {
        CurrencyService.getCurrencies().then((res) => {
            this.setState({currencies: res.data})
        })
    }

    addCurrency() {
        this.props.history.push('/register-currency');
    }

    viewCurrency(id) {
        this.props.history.push('/view-currency/' + id)
    }

    updateCurrency(id) {
        this.props.history.push('/register-currency/' + id);
    }

    deleteCurrency(id) {
        CurrencyService.deleteCurrency(id).then(res => {
            this.setState({currencies: this.state.currencies.filter(currency => currency.id !== id)});
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Cripto Moedas</h2><br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                {/*
                                <th>Descrição</th>
                                <th>Cotação (R$)</th>
                                <th>Criada em</th>
                                <th>Atualizada em</th>
                                <th>Status</th>
                                */}
                                <th>Ações</th>
                            </tr>
                        </thead>
                            
                        <tbody>
                            {
                                this.state.currencies.map(
                                    currency => 
                                    <tr key = { currency.id }>
                                        <td>{ currency.id }</td>
                                        <td>{ currency.name }</td>
                                        {/*
                                        <td>{ currency.description }</td>
                                        <td>{ currency.value }</td>
                                        <td>{ currency.createdAt.replace("T"," ") }</td>
                                        <td>{ currency.updatedAt.replace("T"," ") }</td>
                                        <td>{ currency.active ? "Ativa" : "Inativa" }</td>
                                        */}
                                        <td>
                                            <button onClick={() => this.updateCurrency(currency.id)} className="btn btn-info">Atualizar</button>
                                            <button onClick={() => this.deleteCurrency(currency.id)} className="btn btn-danger ml-2">Remover</button>
                                            <button onClick={() => this.viewCurrency(currency.id)} className="btn btn-info ml-2" >Detalhes</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCurrencyComponent
