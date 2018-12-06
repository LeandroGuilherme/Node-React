import React, { Component } from "react";
import axios from 'axios';
import { Card, Row, Col,  Container } from 'react-materialize';
import { Form } from "./styles";

class Listar extends Component {
  constructor() {
    super();
    this.state = { 
      array: [],
      search:''
    };
  }

  
  handleSignUp = e => {
    console.log("e: "+e)
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

  handleSignUp = e => {
    console.log("e: "+e);
    console.log("Console:"+ this.state.search);
    const agenda = [{titulo: "oi"}]
    let self = this;
    self.setState({array: agenda})
    axios.get(`http://localhost:5000/agenda/`)
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

  render() {
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
                <input type="text" placeholder="buscar" 
                    onChange={e => this.setState({ search: e.target.value })}/>
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