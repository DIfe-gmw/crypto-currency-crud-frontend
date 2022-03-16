import React, { Component } from 'react'
import CurrencyService from '../services/CurrencyService';

class CreateCurrencyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            value: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeValueHandler = this.changeValueHandler.bind(this);
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
                        value: currency.value
                    }
                );
            })
        }
    }

    saveOrUpdateCurrency = (e) => {
        e.preventDefault();

        let currency = {name: this.state.name, description: this.state.description, value: this.state.value};
        console.log('currency => ' + JSON.stringify(currency));

        if(this.state.id === "add") {
            CurrencyService.createCurrency(currency).then(res => {
                this.props.history.push('/list-currency');
            })
        } 
        else {
            CurrencyService.updateCurrency(currency, this.state.id).then(res => {
                this.props.history.push('/list-currency')
            });
        }
    }

    changeNameHandler=(event) => {
        this.setState({name: event.target.value})
    }

    changeDescriptionHandler=(event) => {
        this.setState({description: event.target.value})
    }

    changeValueHandler=(event) => {
        this.setState({value: event.target.value})
    }

    cancel() {
        this.props.history.push('/register-currency');
    }

    getTitle() {
        if (this.state.id === "add") {
            return <h3 className="text-center">Adicionar Moeda</h3>
        }
        else {
            return <h3 className="text-center">Atualizar Moeda</h3>
        }
    }

    render() {
        return (
            <div> 
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            { this.getTitle() }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input placeholder="Nome" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler}></input><br/>
                                    </div>

                                    <div className="form-group">
                                        <input placeholder="Descrição" name="description" className="form-control"
                                        value={this.state.description} onChange={this.changeDescriptionHandler}></input><br/>
                                    </div>

                                    <div className="form-group">
                                        <input placeholder="Valor Monetário" name="value" className="form-control"
                                        value={this.state.value} onChange={this.changeValueHandler}></input>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateCurrency}>Inserir</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCurrencyComponent