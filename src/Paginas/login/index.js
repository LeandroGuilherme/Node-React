import React, { Component } from "react";
import axios from 'axios';
import { Card, Row, Col,  Container } from 'react-materialize';
import { Form } from "./styles";
import {Link} from 'react-router-dom'


class Login extends Component {
  state = {
    login: "",
    password: "",
  };

  handleSignUp = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post(`http://localhost:5000/auth/autenticar`, { login: this.state.login, password: this.state.password })
      .then(res => {
        console.log(res);
        console.log(res.data);

        const tokenlocal = res.data.token;

        localStorage.setItem("TOKEN_KEY", tokenlocal);
        this.props.history.push('/listar');
        console.log(tokenlocal);
        
      }).catch(error => {
        console.log(error.response)
      });
  };

  render() {

    return (
      <Row>
        <Container>
          <Row>
            <Col m={8} s={12}>
            <Card>
              <Form onSubmit={this.handleSignUp}>
                <input
                  type="text"
                  placeholder="Login"
                  onChange={e => this.setState({ login: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Senha"
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="submit">Entrar</button>
                <hr />
                <Link to="/cadastro">Cadastrar</Link>
              </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}

export default Login;
