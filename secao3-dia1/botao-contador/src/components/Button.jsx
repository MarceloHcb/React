import React from "react";
import style from './Button.module.css'
import Circle from "./Circle";

class Button extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            color: 'antiquewhite'
        }
    }
    handleClick() {
        this.setState((antigo, _props) => ({
            color: antigo.color = this.props.color
        })) 
    }
    render () {
        return (
            <>
            <div className={style.div}>
                <Circle color={this.state.color} />
                <button onClick={this.handleClick} className={style.btn}> {this.props.color} </button>
            </div>
            </>
        )
    }
}

export default Button