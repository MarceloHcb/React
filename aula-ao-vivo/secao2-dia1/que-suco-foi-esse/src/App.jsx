import React from "react";
import juices from './data';
import "./App.css";
import CardJuice from "./components/CardJuice";

// 1. Listar os nomes dos sucos ✅
// 2. Renderizar o copo do suco ✅
// 3. Mudar a cor do copo. ✅
// 4. Criar o input de texto ✅
// 5. Armazenar as informações do input no estado ✅
// 6. Filtrar os sucos ✅

// Bônus. Remover case sensitive do filtro

class App extends React.Component {
  // FORMA TRADICIONAL
  // constructor() {
  //   super();
    
  //   this.state = {
  //     juiceFilter: '',
  //   }

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // FORMA NOVA
  state = {
    juiceFilter: '',
    // count: 0
  }

  // handleChange({ target }) {
  //   const value = target.value;

  //   console.log(this);
  //   // 1 FORMA
  //   this.setState({
  //     juiceFilter: value,
  //   })
  // }

  handleChange = ({ target }) => {
    const value = target.value;

    // 1 FORMA
    this.setState({
      juiceFilter: value,
    });

    // 2 FORMA
    // this.setState((prevState) => {
    //   console.log(prevState, 'ESTADO ANTIGO');
    //   return {
    //     juiceFilter: value,
    //     count: prevState.count + 1,
    //   }
    // });

    // 3 FORMA
    // this.setState({
    //   juiceFilter: value,
    // }, () => {
    //   console.log(this.state.juiceFilter);
    // });
  }

  render() {
    console.log('RENDERIZOU');
    const { juiceFilter } = this.state;
    return (
      <>
        <h1>🍹 Que Suco Foi Esse? 🍹</h1>

        <input
          className="field-text"
          type="text"
          onChange={ this.handleChange }
        />

        <ul>
          {
            juices
            .filter((juice) => juice.suco.includes(juiceFilter))
            .map((juice) => (
              <CardJuice key={juice.hex} juice={juice} />
            ) )
          }
        </ul>
      </>
    );
  }
}

export default App;
