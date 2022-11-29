import React from "react";
let contador = 0;
function handleClick () {
    if (contador === 0) {
        console.log('clicou');
    }
    if (contador === 1) {        
        console.log('no');
    }
    if (contador === 2) {
        console.log('Botão');
    }
    contador +=1
    if (contador === 3) {
    contador =0
    }
}
class Button extends React.Component {
    render () {
        return (
            <button disabled={this.props.desable} onClick={handleClick}>{this.props.title}</button>
        )
    }
}

export default Button;