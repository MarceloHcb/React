import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
   <Button disabled={false} title='clique 1' text='Clicou'/>
   <Button disabled={true} title='clique 2' text='no'/>
   <Button disabled={true} title='clique 3' text='Botão'/>
    </div>
  );
}

export default App;
