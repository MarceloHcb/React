import React from "react";

export default class Carro extends React.Component {
    constructor(props) {
        super(props)
        this.modelo = 'HRV'
        this.state = {
            ligado: false,
            velAtual: 0,
            erro: ''
        }
        this.ld = this.ligarDesligar.bind(this)
    }

    ligarDesligar() {
        this.setState({
            ligado: !this.state.ligado
        })
    }

    acelerar() {
        console.log('acelerou');
        const { velAtual, ligado } = this.state
        this.setState({
            velAtual: ligado && velAtual + this.props.fator,
            erro: !ligado ? 'Carro Desligado' : '',
        })
    }

    freiar() {
        console.log('freiou');
        const { velAtual, ligado } = this.state
        this.setState({
            velAtual: ligado && velAtual - this.props.fator,
            erro: velAtual === 0 ? 'Carro Parado' : '',
        })
    }
    componentDidMount() {
        console.log('componentDidMount  o  carro foi criado !');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate   o carro foi Atualizado !');
    }

    shouldComponentUpdate(nextProps, nextState) {
            return nextState.velAtual >= 0;
      }

    componentWillUnmount() {
        console.log('componentWillUnmount  o carro foi Removido !');
    }

    render() {
        return (
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Vel.Atual: {this.state.velAtual}</p>
                <button onClick={this.ld}>
                    {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}
                </button>
                <button onClick={() => this.acelerar()} >Acelerar</button>
                <button onClick={() => this.freiar()} >Freiar</button>

                <h2 style={{ background: 'red' }}>{this.state.erro && this.state.erro}</h2>

            </div>
        )
    }
}
