import { Component } from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { getStates } from '../services/apiService';

class Home extends Component {
  state = {
    isLoading: true,
    ufs: [],
  }

  componentDidMount() {
    this.loadStates();
  }

  loadStates = async () => {
    const ufs = await getStates()
    this.setState({
      ufs,
      isLoading:false,
    }, () => console.log(this.state.ufs))
  }

  render() { 
    const { isLoading, ufs } = this.state
    return (
      <div className="home-container">
        { isLoading ? (
          <Loading /> ):(
          <>
            <h1>Estados do Brasil</h1>
            <span>Fonte: BrasilAPI</span>
            <div className='cards'>
            {
              ufs.map((el, index) => (
                <Card
                key={ index }
                name={el.name}
                uf={el.sigla}
                region={el.regiao.nome}
                />
              ))
            }
            </div>
          </>
        )
        }
      </div>
    );
  }
}
 
export default Home;