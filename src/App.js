import { useState } from "react";
import NavMenu from "./components/NavMenu";
import logo from './test.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-logo">
          Jan Sernec sd
        </p>
      </header>
    </div>
  );
}

export default App;
