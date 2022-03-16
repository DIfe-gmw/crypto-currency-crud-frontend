import React, { Component } from 'react'
import CurrencyService from '../services/CurrencyService'

class ViewCurrencyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            currency: {}
        }
    }
    
    componentDidMount() {
        CurrencyService.getCurrencyById(this.state.id).then(res => {
            this.setState({currency: res.data});
        })
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center ">Ver Detalhes da Moeda</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Nome: </label>
                            <div>{this.state.currency.name}</div>
                        </div>
                        <div className="row">
                            <label>Descrição: </label>
                            <div>{this.state.currency.description}</div>
                        </div>
                        <div className="row">
                            <label>Cotação: </label>
                            <div>{"R$" + this.state.currency.value}</div>
                        </div>
                        <div className="row">
                            <label>Status: </label>
                            <div>{this.state.currency.active ? "Ativa" : "Inativa"}</div>
                        </div>
                        <button onClick={() => { this.props.history.push('/list-currency') }} className="btn btn-success">Voltar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCurrencyComponent