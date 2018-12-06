import React, { Component } from "react";
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-materialize';
import { Form } from "./styles";

//import { getToken } from "./auth";

class Inserir extends Component {
  state = {
    data: "",
    descricao: "",
    titulo: "",
  };


  handleSignUp = e => {
    e.preventDefault();
    const token = localStorage.getItem('TOKEN_KEY');
    console.log(this.state);
    //alert("Eu vou te inserir");

    const AuthStr = 'Bearer '.concat(token)
    //console.log(AuthStr);
    axios.post(`http://localhost:5000/agenda`,
      {
        headers: { 'Content-Type': 'application/json', 'Authorization': AuthStr },
        titulo: this.state.titulo, descricao: this.state.descricao, data: this.state.data
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push('/listar');
      }).catch(error => {
        console.log(error.response)
        console.log(error)
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
                  {this.state.error && <p>{this.state.error}</p>}
                  <input
                    type="text"
                    placeholder="Titulo"
                    onChange={e => this.setState({ titulo: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Descricao"
                    onChange={e => this.setState({ descricao: e.target.value })}
                  />
                  <input
                    type="date"
                    placeholder="Data"
                    onChange={e => this.setState({ data: e.target.value })}
                  />
                  <button type="submit">Inserir</button>
                  <hr />
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}

export default Inserir;
