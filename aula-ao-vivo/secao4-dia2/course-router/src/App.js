import React from "react";
import { BrowserRouter } from 'react-router-dom';

import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


/*
ROADMAP DA AULA
1) Vamos adicionar links no sidebar (LINK e BROWSER ROUTER) ✅
2) Pausa para dúvidas ✅
3) Vamos criar algumas rotas em nossa aplicação (ROUTE)  ✅
4) Pausa para dúvidas  ✅
5) Intervalo  ✅
6) Vamos criar rotas com parâmetros (ROUTE E RENDER, PROPS)  ✅
7) Pausa para dúvidas  ✅
8) Rota Privada (REDIRECT E RENDER)  ✅
9) Rota com uso de botão (HISTORY)  ✅
10) Bônus - Children
*/