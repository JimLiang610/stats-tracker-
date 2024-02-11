import logo from './logo.svg';
import './App.css';
import Title from './Title.js';
import Navbar from './Navbar.js';
import Playerlookup from './Playerlookup';

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Playerlookup />
    </div>
  );
}

export default App;
