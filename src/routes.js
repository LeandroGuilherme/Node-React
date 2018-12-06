import React, { Component } from 'react';
import {  Route, Switch,Link } from "react-router-dom";
import {  Navbar, NavItem } from 'react-materialize';
import Inserir from './Paginas/inserir'
import Listar from './Paginas/listar'

class Routes extends Component {
  render() {
    return (
      <div className="Router">
        <header className="App-header">
        <Navbar className="grey darken-2">
          <NavItem><Link to="/listar">listar</Link></NavItem>
          <NavItem ><Link to="/inserir">inserir</Link></NavItem>
        </Navbar>
        </header>
        <main>
          <Switch>
            <Route path="/inserir" component={Inserir} />
            <Route path="/listar" component={Listar} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
          </Switch>
        </main>
      </div>
    );
  }
}
/*
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/inserir" component={Inserir} />
      <Route path="/listar" component={Listar} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);
*/
export default Routes;