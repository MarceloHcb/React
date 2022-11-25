import Image from './Image';
import './App.css';
import source from './cat-2083492_1280.jpg'

function App() {
  return (
    <div className="App">     
       <Image 
       source={source}
       alternativeText="Cute cat staring"
       />     
    </div>
  );
}

export default App;
