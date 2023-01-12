import React from "react";
import style from './Circle.module.css'
import H1 from "./H1";

class Circle extends React.Component {
    render() {
        return (
            <div className={style.circle} style={{backgroundColor: this.props.color}}>
                <H1 />
            </div>
        )
    }
}

export default Circle;