import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Cadastro from './Paginas/cadastro'
import Login from './Paginas/login'

ReactDOM.render(
<BrowserRouter>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/cadastro" component={Cadastro} />
    <App />
    </Switch>
</BrowserRouter>
,document.getElementById('root'));

