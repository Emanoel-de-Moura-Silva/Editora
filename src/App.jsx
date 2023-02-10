import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from './components/Catalogo';
import NotFound from './components/NotFound'
import Rodape from "./components/Rodape";
import Frontend from "./components/Frontend";
import Design from './components/Design';
import Programacao from "./components/Programacao";
import './index.css';
import Livro from './components/Livro'
import axios from 'axios'

class App extends Component {
  state = {
    livros: [],
  };
  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }
  }
  render() {
    return (
      <Router>
      <Fragment>
        <Topo />
        {/**Não se usa mais Switch, agora com a nova biblioteca é Routes */}
        <Routes>
          <Route
            exact
            path="/"
            element={ <Home livros={this.state.livros} />}
          />
          <Route
            exact
            path="/frontend"
            element={ <Frontend livros={this.state.livros} />}
          />
          <Route
            exact
            path="/programacao"
            element={<Programacao livros={this.state.livros} />}
          />
          <Route
            exact
            path="/design"
            element={<Design livros={this.state.livros} />}
          />
          <Route
            exact
            path="/catalogo"
            element={<Catalogo livros={this.state.livros} />}
          />
          <Route
            path="/livro/:livroSlug"
            element={props => {
              const livro = this.state.livros.find(
                livro => livro.slug === props.match.params.livroSlug
              );
              if (livro) return <Livro livro={livro} />;
              else return <NotFound />;
            }}
          />
          <Route component={NotFound} />
        </Routes>
        <Rodape />
      </Fragment>
    </Router>
    );
  }
}

export default App;