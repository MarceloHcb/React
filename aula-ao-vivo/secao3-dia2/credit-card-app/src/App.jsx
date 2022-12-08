import React from 'react';
import Header from './components/Header';
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import './App.css';
import Form from './components/Form';

// TAREFAS
// 01 - Criar Formulário ✅
// 02 - Criar Estado do Formulário ✅
// 03 - Criar o handleChange ✅
// 04 - Compartilhar infos com o Card ✅
// 05 - Criar Botão no Form ✅
// 06 - validação dos Campos + Botão ✅

// Bônus - Registrar + Renderizar cartões na aplicação ✅

const CARDS = [
  {
    name: 'andre horman',
    number: '4100000000000000',
    expiry: '1030',
    cvc: '123',
    foco: '',
    isDisable: false,
    registeredCards: [],
  },
  {
    name: 'andre horman',
    number: '5500000000000000',
    expiry: '1030',
    cvc: '123',
    foco: '',
    isDisable: false,
    registeredCards: [],
  },
  {
    name: 'andre horman',
    number: '6062820000000000',
    expiry: '1030',
    cvc: '123',
    foco: '',
    isDisable: false,
    registeredCards: [],
  }
]

const INITIAL_STATE = {
  name: '',
  number: '',
  expiry: '',
  cvc: '',
  foco: '',
  isDisable: true,
  registeredCards: CARDS,
}

class App extends React.Component {
  state = {
    ...INITIAL_STATE
  }

  validationFields = () => {
    // if (cvc.length === 3) {
    //   this.setState({
    //     isDisable: false
    //   });
    // }

    // TASKS VALIDAÇÃO
      // 01 - name tiver mais do que 1 palavra
      // 02 - cvc tiver 3 digitos
      // 03 - data estiver num formato correto
      const { cvc, expiry, name } = this.state;
      const validationCVC = cvc.length === 3;
      const validationDate = expiry.length === 4;
      const regexName = /^((?:[A-Za-z]+ ?){1,3})$/;
      const validationName = regexName.test(name)

      this.setState({
        isDisable: !(validationCVC && validationDate && validationName),
      });
  }

  handleChange = ({target}) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.validationFields);
  }

  handleFocus = ({ target }) => {
    const { name } = target;
    this.setState({
      foco: name,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, cvc, expiry, number } = this.state;
    const newCard = { name, cvc, expiry, number };

    this.setState(({ registeredCards }) => ({
      registeredCards: [...registeredCards, newCard]
    }))
  }

  render() {
    const { cvc, expiry, name, number, foco, registeredCards } = this.state;

    return (
      <>
        <Header />
        <main>
          <section>
            <Form
              { ...this.state }
              handleChange={this.handleChange}
              handleFocus={this.handleFocus}
              handleSubmit={this.handleSubmit}
            />

            <Card
              name={name}
              number={number}
              expiry={expiry}
              cvc={cvc}
              focused={foco}
            />
          </section>

          <section>
            {
              registeredCards.map(({ name, cvc, expiry, number }) => (
                <Card
                key={Math.random()}
                name={name}
                number={number}
                expiry={expiry}
                cvc={cvc}
              />
              ))
            }
          </section>
        </main>
      </>
    );
  }
}

export default App;
