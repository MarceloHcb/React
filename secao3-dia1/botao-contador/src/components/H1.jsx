import React from "react";
import style from './H1.module.css'

class H1 extends React.Component {
    constructor()  {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            counter: 0,
        }
    }
    handleClick() {
        this.setState((anterior, _props)=> ({
            counter: anterior.counter += 1
        }))
    }
    render() {
        return(
            <h1 className={style.h1} onClick={this.handleClick} >{this.state.counter}</h1>
        )
    }
}

export default H1;
