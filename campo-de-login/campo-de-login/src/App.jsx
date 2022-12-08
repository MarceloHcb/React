import React from 'react';
import './App.css';

// validar os campor não são vazios
// senha pelo menos 6
// email possui @ e .com

class App extends React.Component {
  state = {
    email: '',
    password: '',
    isSaveButtonDisabled: true,
  }

  handleValidation = () => {
    const { email, password } = this.state
    const validation1 = email.length > 0 && password.length > 0;
    const validation2 = email.includes('@') && email.includes('.com')
    const validation3 = password.length >= 6;
    this.setState({
      isSaveButtonDisabled: !(validation1 && validation2 && validation3),
    })
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    //ASSINCRONA
    this.setState({
      [name]: value,
    }, this.handleValidation)
  }

  render() {
    const { isSaveButtonDisabled } = this.state
    return (
      <div className="App">
        <h1>Tela de Login</h1>
        <label htmlFor="">
          Escreva seu email:
          <input type="text" name='email' onChange={this.handleChange} />
        </label>

        <label htmlFor="">
          Digite sua senha
          <input type="password" id='password' name='password' onChange={this.handleChange} />
        </label>
        <button disabled={isSaveButtonDisabled}>Login</button>
      </div>
    );
  }
}

export default App;
