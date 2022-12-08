import React from "react";
let contador = 0;
class Button extends React.Component {
    constructor(props) {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            disab: false,
            backgroundColor: 'white',
            color: 'black',
        }
    }
    handleClick() {
        if (contador === 0) {
            console.log('clicou');
            this.setState((anterior, _props) => ({
                disab: anterior.disab = true, 
                color: 'blue',               
            }))
        }
        if (contador === 1) {
            console.log('no');
            this.setState((anterior, _props) => ({
                disab: anterior.disab = true,
                backgroundColor: anterior.backgroundColor = 'green',                
            }))
        }
        if (contador === 2) {
            console.log('Botão');
            this.setState((anterior, _props) => ({
                disab: anterior.disab = true,
                color: 'blue',
            }))
        }
        contador += 1
        if (contador === 3) {
            contador = 0;
        }
    }
    render() {
        return (
            <button disabled={this.state.disab} style={{color: this.state.color, backgroundColor: this.state.backgroundColor }} onClick={this.handleClick}>{this.props.title}</button>
        )
    }
}

export default Button;