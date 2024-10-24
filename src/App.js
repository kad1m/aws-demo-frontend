import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const onClickHandler = () => {
      const response = axios.get('http://localhost:8000/api/ping/')
        console.log(response)
  }


  return (
    <div className="App">
        <header className="App-header">

            <button onClick={onClickHandler}>Click me</button>
        </header>
    </div>
  );
}

export default App;
