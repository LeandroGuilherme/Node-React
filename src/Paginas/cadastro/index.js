import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { Form, Container } from "./styles";

class Cadastro extends Component {
  state = {
    name:"",
    login: "",
    email: "",
    password: "",
  };

  handleSignUp = e => {
    e.preventDefault();
    console.log(this.state);
    alert("Eu vou te registrar");
    
    axios.post(`http://localhost:5000/auth/register`, { name: this.state.name,login: this.state.login,email: this.state.email, password: this.state.password })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push('/');
      }).catch(error => {
        console.log(error.response)
    });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>

          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Login"
            onChange={e => this.setState({ login: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default Cadastro;
