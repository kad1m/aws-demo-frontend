import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const onClickHandler = () => {
        window.alert("I was clicked");
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
