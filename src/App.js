import logo from './logo.svg';
import './App.css';
// import ClockClassComponent from './components/pure/clockClassComponent';
 import Clock from './components/pure/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock></Clock>
        {/* <ClockClassComponent></ClockClassComponent> */}
      </header>
    </div>
  );
}

export default App;
