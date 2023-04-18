import './App.css';
import FirstComponent from './components/FirstComponent';
import ThirdComponent from './components/ThirdComponent';


function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <FirstComponent firstName="Will" lastName="Calhoun"/>\
      <ThirdComponent/>
    </div>
    
  );
}

export default App;
