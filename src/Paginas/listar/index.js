import React, { Component } from "react";
import axios from 'axios';
import { Card, Row, Col,  Container } from 'react-materialize';
import { Form } from "./styles";

class Listar extends Component {
  constructor() {
    super();
    this.state = { 
      array: [],
      buscaUm: null,
      value:''
    };
    this.Busca = [];
    this.teste = "dgfsd"
    this.handleChange = this.handleChange.bind(this);
  }

  inicializaLista() {
    let self = this;
    axios.get(`http://localhost:5000/agenda`)
      .then(res => {

        self.setState({
          array: res.data
        });

        console.log(this.state.array.agenda)
        console.log(this.state.array.agenda[0].titulo)

      }).catch(error => {
        console.log(error.response)
      });
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSignUp = e => {
    let self = this;
    e.preventDefault();
    axios.get(`http://localhost:5000/agenda/`+ this.state.value)
      .then(res => {
        self.setState({
          buscaUm: res.data
        });

        /*  
        self.setState({
          array: this.state.buscaUm
        });
        */
        console.log(this.state.buscaUm);
        console.log("pasdsjdkfns")
        console.log(this.state.array);

      }).catch(error => {
        console.log(error.response)
      });
  };

  render() {
    console.log("entrei")
    console.log(this.state.array.length)
    if (this.state.array.length === 0){
      this.inicializaLista();
      return <div>Loading, please wait…</div>
    }
    else {
      console.log("render:" + this.state.array.agenda)
      console.log("retornei")
      return (
        <Row>
          <Container>
            <Row>
              <Col m={3} s={12}>
                <Card>
                  <Row className="center-align">
                    <h5 >Usuario</h5>
                    <p className="blue darken-2 white-text">Estudante da UTFPR</p>
                  </Row>
                </Card>
              </Col>
              <Col m={8} s={12}>
              <h5 className="subtitle">Agenda</h5>
                <Card>
                <Form onSubmit={this.handleSignUp}>
                  {this.state.error && <p>{this.state.error}</p>}
                  <textarea type="text" placeholder="buscar" 
                     onChange={this.handleChange} />
                  <button type="submit">buscar</button>
                  <hr />
                  </Form>
                </Card>
                <Card>
                  <div>
                    <ul>
                      {this.state.array.agenda.map(item => (
                        <Card key={item._id}>
                          <p><b>Titulo</b></p>
                          <li>
                            {item.titulo}
                          <br />
                          <p><b>Conteudo</b></p>
                            {item.descricao}
                          <br />
                          <p><b>Data</b></p>
                            {item.data}
                          </li>
                          </Card>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </Row>
      );
    }
  }
}

export default Listar;

/*
        const UserListResults = ({ error, results, isLoading }) => {
          if (error) {
            return <span>Something is not right!</span>;
          }
        
          if (isLoading) {
            return <span>Loading...</span>;
          }
        
          if (!results.length) {
            return <span>No Results Found</span>;
          }
        
          return (
            <ul>
              {result.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }
      */


/*
      <Container>
          <h1>Entrei pra listar</h1>
          <br/>
          <br/>
          <br/>
          <button onClick={this.handleSignUp}>Inserir</button>
          
      </Container>*/