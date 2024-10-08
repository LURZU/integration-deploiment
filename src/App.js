import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  let [count, setCount] = useState(0);

  const clickOnMe = () => {
    setCount(count + 1);
  }

  return (
    <div className="App mt-10">
      <button className={"border-2 mr-4 p-1 rounded"} onClick={clickOnMe}>Click on me</button>
      <span data-testid="count">{count}</span>
    </div>
  );
}

export default App;
