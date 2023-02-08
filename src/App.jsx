import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from './components/Catalogo';
import NotFound from './components/NotFound'
import Rodape from "./components/Rodape";
import Frontend from "./components/Frontend";
import Design from './components/Design';
import Programação from "./components/Programação";
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
      <>
        <Topo />
        <Switch>
          {/**
           * O componente Route que define as rotas e admite os atributos exact, que torna o unico o destino do link, e o atributo render, que aponta para o componente a ser renderizado
           */}
          <Route exact path="/" render={Home}/>
          {/**
           * O atributo render admite, também, uma sintaxe em forma de arrow function cujo retorno é o componente a renderizar. Usa-se essa sintexe quando é necessario passar props para os componentes. È o caso dos componentes Frontend, Programção, Design e Catalogo.
           */}
          <Route exact path="/frontend" render={() => <Frontend/>} />
          <Route exact path="/progamacao" render={() => <Programação/>} />
          <Route exact path="/design" render={() => <Design/>} />
          <Route exact path="/catalogo" render={() => <Catalogo/>} />
          <Route component={NotFound} />
        </Switch>
      <Rodape />
      </>
      </Router>
    );
  }
}

export default App;