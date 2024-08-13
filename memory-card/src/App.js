import logo from './logo.svg';
import './App.css';
import CreateCard from './Components/CreateCard';

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Memory card</h1>
      </header>
      <CreateCard />
    </div>
  );
}


