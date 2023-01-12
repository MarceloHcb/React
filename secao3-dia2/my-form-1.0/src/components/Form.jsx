import React from "react";
import style from './Form.module.css'

class Form extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)        
        this.handleClick = this.handleClick.bind(this)   
        this.state = {
            text: '',
            email: '',
            select:'',
            color: '',
            checkbox: '',
            textarea: '',
        }
    }
    handleChange ({target}) {
        const { name } = target
        const value = target.type ==='checkbox' ? target.checked : target.value
       this.setState((prevent) => ({
           [name]:value
        }))
    }
   handleClick(event) {
    event.preventDefault()
    console.log(this.state);
   }
   
    render () {
        return (
            <>
                <h1>Escolha um jogador e uma cor de chuteira</h1>                
            <div className={style.container}>
                <form action="" >
                    <fieldset className={style.form}>
                        <legend>Formulário</legend>
                <div>
                <label htmlFor="input-text">Nome: </label>
                <input type="text" id="input-text" name="text" value={this.state.text} placeholder=" Seu nome" onChange={this.handleChange}/>
                <label htmlFor="input-email">email: </label>
                <input type="email" id="input-email" name="email" value={this.state.email} placeholder=" Seu email" onChange={this.handleChange}/>
                </div>
                
                <select name="select" id="input-select" value={this.state.select} onChange={this.handleChange}>
                    <option value="jogadores">escolha um jogador</option>
                    <option value="Neymar">Neymar</option>
                    <option value="Ronaldinho">Ronaldinho</option>
                    <option value="Pelé">Pelé</option>
                </select>
                <label htmlFor="input-color"> Cor da chuteira:</label>
                <input type="color" name="color" value={this.state.color} onChange={this.handleChange} id={style.color} />
                <textarea name="textarea" id="input-text-area" cols="30" rows="10" value={this.state.textarea} placeholder="Deixe seu comentário" onChange={this.handleChange}></textarea>
                <input type="file" name="" id="" />
                <label htmlFor="input-checkbox">Aceito!</label>
                <input type="checkbox" name="checkbox"  value={this.state.checkbox} id="input-checkbox" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>subimit</button>
                </fieldset>
                </form>
                <div className={style.result}>
                <h2>{this.state.text}</h2>
                <p>{this.state.color}</p>
                <p>{this.state.checkbox}</p>
                <p>{this.state.select}</p>
                <p>{this.state.textarea}</p>
                </div>
            </div>

            </>
        )
    }
}

export default Form;
