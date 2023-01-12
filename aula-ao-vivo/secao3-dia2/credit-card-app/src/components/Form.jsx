import React, { Component } from 'react'

class Form extends Component {
  render() {
    const {
      name,
      number,
      expiry,
      cvc,
      isDisable,
      handleChange,
      handleFocus,
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          Escreva o nome
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={ handleChange }
            onFocus={ handleFocus }
          />
        </label>
        <label htmlFor="number">
          Digite o número
          <input
            type="text"
            name="number"
            id="number"
            value={number}
            onChange={ handleChange }
            onFocus={ handleFocus }
          />
        </label>
        <label htmlFor="expiry">
          Digite a data de validade
          <input
            type="text"
            name="expiry"
            id="expiry"
            value={expiry}
            onChange={ handleChange }
            onFocus={ handleFocus }
          />
        </label>
        <label htmlFor="cvc">
          Digite o código de verificação
          <input
            type="text"
            name="cvc"
            id="cvc"
            value={cvc}
            onChange={ handleChange }
            onFocus={ handleFocus }
          />
        </label>

        <button disabled={isDisable} >Cadastre</button>
      </form>
    )
  }
}

export default Form
