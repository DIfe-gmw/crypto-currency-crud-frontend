import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListCurrencyComponent from './components/ListCurrencyComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUpdateCurrencyComponent from './components/CreateUpdateCurrencyComponent';
import ViewCurrencyComponent from './components/ViewCurrencyComponent';


function App() {
    return (
        <div className="App">
            <Router>
                <HeaderComponent/>
        
                <div className="container">
                    <Switch>
                        <Route path = "/list-currency" exact component = {ListCurrencyComponent}></Route>
                        <Route path = "/register-currency/:id" component = {CreateUpdateCurrencyComponent}></Route>
                        <Route path = "/view-currency/:id" component = {ViewCurrencyComponent}></Route>
                    </Switch>
                </div>
            
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
