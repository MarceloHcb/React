import { Component } from 'react';
import Loading from '../components/Loading';
import { getLocalByCep } from '../services/apiService';

class Search extends Component {
  state = ({
    cep: '',
    isLoading: false,
    localByCep: [],
  })

  handleChange = ({ target }) => {
    this.setState({
      cep: target.value,
    })

  }
  handleClick = async () => {
    const { cep } = this.state;
    this.setState({
      isLoading: true,
    })
    const localByCep = await getLocalByCep(cep)
    this.setState({
      isLoading: false,
      localByCep,
    })
  }

  render() {
    const { isLoading, localByCep } = this.state;
    return (
      <div className='home-container'>
        <label htmlFor="inputSearch">
          <input type="search"
            id='inputSearch'
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="button">
          <button type='button' id='button' onClick={this.handleClick}>Pesquisar</button>
        </label>
        <div>
          {isLoading ? <Loading /> : (
            localByCep ? (
              <>
                <table cellPadding="0" cellSpacing="0">
                  <thead>
                    <tr>
                      <td>{localByCep.city}</td>
                      <td>{localByCep.state}</td>
                    </tr>
                  </thead>
                  <tbody>

                    <tr >
                      <td>{localByCep.street}</td>
                      <td>{localByCep.neighborhood}</td>
                    </tr>
                    <tr >
                      <td>{localByCep.cep}</td>
                      <td>{localByCep.service}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <table cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <td>Digite um cep válido</td>
                  </tr>
                </thead>
              </table>
            )
          )}

        </div>
      </div>
    );
  }
}

export default Search;