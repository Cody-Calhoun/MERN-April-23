import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      {/* <FirstComponent firstName="Will" lastName="Calhoun" /> */}
      <Counter/>
    </div>
  );
}

export default App;
